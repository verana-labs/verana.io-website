// Server-side client for the Verana testnet indexer (trust-registry listing)
// and resolver (trust resolution). All calls are made from route handlers or
// server components, never from the browser, so the upstream stays hidden and
// responses are cached by Next's fetch cache.
//
// Endpoints verified against testnet (spec-v2 §2.1):
//   GET {INDEXER_URL}/verana/tr/v1/list?only_active=true&active_gf_only=true
//   GET {RESOLVER_URL}/v1/trust/resolve?did=...&detail=summary|full

export const INDEXER_URL =
  process.env.INDEXER_URL ?? "https://idx.testnet.verana.network";
export const RESOLVER_URL =
  process.env.RESOLVER_URL ?? "https://resolver.testnet.verana.network";

/** Human-readable network name shown next to live widgets. */
export const NETWORK_NAME = process.env.VERANA_NETWORK_NAME ?? "testnet";

/** The network frontend (trust-registry browser); /tr/{id} shows an ecosystem. */
export const NETWORK_APP_URL =
  process.env.NETWORK_APP_URL ?? "https://app.testnet.verana.network";

export type TrustRegistry = {
  id: number;
  did: string;
  created: string;
  deposit: number;
  aka: string | null;
  language: string;
  participants: number;
  active_schemas: number;
  issued: number;
  verified: number;
};

export type ResolvedCredential = {
  id: string;
  type: string;
  claims: Record<string, unknown>;
  format: string;
  result: string;
  ecsType: string;
  issuedBy: string;
  presentedBy: string;
  permissionChain: unknown[];
};

export type FailedCredential = {
  id: string;
  error: string;
  format: string;
  errorCode: string;
  message?: string;
};

export type ResolveResult = {
  did: string;
  trustStatus: "TRUSTED" | "UNTRUSTED";
  production: boolean;
  evaluatedAt: string;
  evaluatedAtBlock: number;
  expiresAt: string;
  credentials: ResolvedCredential[];
  failedCredentials: FailedCredential[];
  dereferenceErrors?: unknown[];
};

/** List the latest active trust registries (ecosystems), newest first. */
export async function listTrustRegistries(
  max: number
): Promise<TrustRegistry[]> {
  const url =
    `${INDEXER_URL}/verana/tr/v1/list` +
    `?only_active=true&active_gf_only=true&response_max_size=${max}`;
  const res = await fetch(url, {
    next: { revalidate: 600 },
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`indexer list failed: ${res.status}`);
  const data = (await res.json()) as { trust_registries?: TrustRegistry[] };
  return data.trust_registries ?? [];
}

/** Trust-resolve a DID against the resolver. */
export async function resolveDid(
  did: string,
  detail: "summary" | "full" = "summary",
  timeoutMs = 30_000
): Promise<ResolveResult> {
  const url =
    `${RESOLVER_URL}/v1/trust/resolve` +
    `?did=${encodeURIComponent(did)}&detail=${detail}`;
  const res = await fetch(url, {
    next: { revalidate: 600 },
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!res.ok) throw new Error(`resolver failed: ${res.status}`);
  return (await res.json()) as ResolveResult;
}

/**
 * Host of the server behind a did:web / did:webvh DID (did:web:{host}...,
 * did:webvh:{scid}:{host}...). Returns null for other methods.
 */
export function didServiceHost(did: string): string | null {
  const parts = did.split(":");
  let host: string | undefined;
  if (parts[1] === "web") host = parts[2];
  else if (parts[1] === "webvh") host = parts[3];
  if (!host) return null;
  host = decodeURIComponent(host);
  return /^[a-zA-Z0-9.-]+(?::\d+)?$/.test(host) ? host : null;
}

export type PotCredentialExtras = {
  /** Credential logo (data: or https: URL) from the linked VP. */
  logo?: string;
  /** URL of the Linked Verifiable Presentation carrying the credential. */
  vpUrl?: string;
};

/** Per-ECS-type extras (logo + credential URL), keyed by ecsType. */
export type PotEnrichment = Record<string, PotCredentialExtras>;

type DidDocService = { type?: string; serviceEndpoint?: unknown };

function isSafeImage(v: unknown): v is string {
  return (
    typeof v === "string" &&
    (v.startsWith("data:image/") || v.startsWith("https://"))
  );
}

/**
 * Enrich a full resolve result with logos and credential (linked VP) URLs by
 * reading each presenter's DID document at /.well-known/did.json and the
 * Linked Verifiable Presentations it exposes (spec-v2 §2.3 card extras).
 * Best-effort: failures simply yield no extras.
 */
export async function getPotEnrichment(
  result: ResolveResult
): Promise<PotEnrichment> {
  const enrichment: PotEnrichment = {};
  const vpCache = new Map<string, unknown[]>(); // presenter did -> fetched VPs+urls

  async function linkedVps(
    did: string
  ): Promise<{ url: string; vp: Record<string, unknown> }[]> {
    if (vpCache.has(did)) {
      return vpCache.get(did) as { url: string; vp: Record<string, unknown> }[];
    }
    const out: { url: string; vp: Record<string, unknown> }[] = [];
    try {
      const host = didServiceHost(did);
      if (host) {
        const res = await fetch(`https://${host}/.well-known/did.json`, {
          next: { revalidate: 600 },
          signal: AbortSignal.timeout(8_000),
        });
        if (res.ok) {
          const doc = (await res.json()) as { service?: DidDocService[] };
          const urls = (doc.service ?? [])
            .filter((s) => s.type === "LinkedVerifiablePresentation")
            .map((s) => s.serviceEndpoint)
            .filter((u): u is string => typeof u === "string" && u.startsWith("https://"))
            .slice(0, 6);
          const unique = [...new Set(urls)];
          const vps = await Promise.all(
            unique.map(async (url) => {
              try {
                const r = await fetch(url, {
                  next: { revalidate: 600 },
                  signal: AbortSignal.timeout(8_000),
                });
                if (!r.ok) return null;
                return { url, vp: (await r.json()) as Record<string, unknown> };
              } catch {
                return null;
              }
            })
          );
          out.push(...vps.filter((v): v is { url: string; vp: Record<string, unknown> } => v !== null));
        }
      }
    } catch {
      // no extras for this presenter
    }
    vpCache.set(did, out);
    return out;
  }

  for (const cred of result.credentials ?? []) {
    if (!cred.ecsType || !cred.presentedBy) continue;
    const vps = await linkedVps(cred.presentedBy);
    for (const { url, vp } of vps) {
      const raw = vp.verifiableCredential;
      const vcs = Array.isArray(raw) ? raw : raw ? [raw] : [];
      for (const vc of vcs as { credentialSubject?: Record<string, unknown> }[]) {
        const subject = vc.credentialSubject;
        if (!subject) continue;
        const matches =
          subject.id === cred.id ||
          (typeof subject.name === "string" && subject.name === cred.claims?.name);
        if (!matches) continue;
        // The service and org credentials share a subject id; tell them apart
        // by the claims that only one of them carries.
        const looksOrg = "registryId" in subject || "countryCode" in subject;
        const isOrgSlot = cred.ecsType !== "ECS-SERVICE";
        if (looksOrg !== isOrgSlot) continue;
        enrichment[cred.ecsType] = {
          ...(isSafeImage(subject.logo) ? { logo: subject.logo } : {}),
          vpUrl: url,
        };
      }
    }
  }
  return enrichment;
}

/** Pick a display name out of a full resolve result (ECS credential claims). */
export function resolvedName(r: ResolveResult): string | null {
  for (const ecs of ["ECS-SERVICE", "ECS-ORG", "ECS-PERSONA"]) {
    const cred = r.credentials?.find((c) => c.ecsType === ecs);
    const name = cred?.claims?.name;
    if (typeof name === "string" && name.length > 0) return name;
  }
  return null;
}

export type TrustedEcosystem = {
  id: number;
  did: string;
  name: string;
  created: string;
  activeSchemas: number;
  participants: number;
};

/**
 * Latest trusted ecosystems (spec-v2 §2.2): list the newest registries, trust-
 * resolve each DID, and keep only the TRUSTED ones. Scan is bounded so a
 * testnet full of e2e artifacts cannot stall the render; the widget's empty
 * state handles a zero-result scan.
 */
export async function getLatestTrustedEcosystems(
  want = 10,
  scanCap = 40
): Promise<TrustedEcosystem[]> {
  const registries = await listTrustRegistries(scanCap);
  const out: TrustedEcosystem[] = [];
  const batchSize = 8;

  for (let i = 0; i < registries.length && out.length < want; i += batchSize) {
    const batch = registries.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (reg) => {
        try {
          const r = await resolveDid(reg.did, "full", 8_000);
          if (r.trustStatus !== "TRUSTED") return null;
          return {
            id: reg.id,
            did: reg.did,
            name: resolvedName(r) ?? reg.aka ?? reg.did,
            created: reg.created,
            activeSchemas: reg.active_schemas,
            participants: reg.participants,
          } satisfies TrustedEcosystem;
        } catch {
          // Slow or unreachable resolution counts as not-shown, not an error.
          return null;
        }
      })
    );
    for (const r of results) {
      if (r && out.length < want) out.push(r);
    }
  }
  return out;
}
