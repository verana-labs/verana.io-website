// Server-side client for the Verana indexer (v4): ecosystem listing and
// Verifiable Trust resolution. All calls are made from route handlers or
// server components, never from the browser, so the upstream stays hidden and
// responses are cached by Next's fetch cache.
//
// Endpoints (indexer OpenAPI, /openapi.json):
//   GET  {INDEXER_URL}/v4/ecosystem/list?archived=false&limit=...
//   POST {INDEXER_URL}/v4/verifiable-trust/resolve   (IDX-VT-QRY-1)
//   GET  {INDEXER_URL}/v4/verifiable-trust/dids      (IDX-VT-QRY-3)

export const INDEXER_URL =
  process.env.INDEXER_URL ?? "https://idx.testnet.verana.network";

/** Human-readable network name shown next to live widgets. */
export const NETWORK_NAME = process.env.VERANA_NETWORK_NAME ?? "testnet";

/** The network frontend; /ecosystems/{id} shows an ecosystem. */
export const NETWORK_APP_URL =
  process.env.NETWORK_APP_URL ?? "https://app.testnet.verana.network";

export type Ecosystem = {
  id: number;
  did: string;
  created: string;
  active_schemas: number;
  participants: number;
};

/** ECS credential schemas, as named by the indexer (`ecsSchema`). */
export type EcsSchema =
  | "ServiceCredential"
  | "OrganizationCredential"
  | "PersonaCredential"
  | "UserAgentCredential"
  | "BadgeCredential";

export type EcsCredential = {
  ecsSchema: EcsSchema;
  ecsSchemaVersion: string;
  credentialSchemaId: number;
  issuerParticipantId: number;
  ecosystemId: number;
  participantId: number;
  /** Credential id; for an issued credential, "<issuer DID>#<uuid>". */
  id: string;
  issuedAtTime: string;
  validFrom: string | null;
  validUntil: string | null;
  credentialSubject: Record<string, unknown>;
};

export type LinkedPresentation = {
  /** URL of the Linked Verifiable Presentation. */
  id: string;
  /** DID Document service entry that links it. */
  serviceId: string;
  unresolvableCredentialIds?: string[];
  invalidCredentialIds?: string[];
};

/** Response of POST /v4/verifiable-trust/resolve with the sections this site
 *  requests (ecsCredentials, presentations). */
export type Resolution = {
  did: string;
  trusted: boolean;
  evaluatedAtTime: string;
  evaluatedAtBlock: number;
  expiresAtTime: string | null;
  corporationId: number;
  ecsCredentials?: EcsCredential[];
  presentations?: LinkedPresentation[];
};

/** What /api/resolve returns: a resolution, or the DID the indexer has no
 *  trust evaluation for (not a DID of the public registry). */
export type ResolvePayload =
  | ({ found: true; network: string } & Resolution)
  | { found: false; network: string; did: string };

/** List the latest non-archived ecosystems, newest first. */
export async function listEcosystems(max: number): Promise<Ecosystem[]> {
  const url = `${INDEXER_URL}/v4/ecosystem/list?archived=false&limit=${max}`;
  const res = await fetch(url, {
    next: { revalidate: 600 },
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`indexer ecosystem list failed: ${res.status}`);
  const data = (await res.json()) as { ecosystems?: Ecosystem[] };
  return data.ecosystems ?? [];
}

/** Trust-resolve a DID against the indexer. Returns null when the indexer has
 *  no trust evaluation for it (HTTP 404: the DID is not in the registry).
 *
 *  `fresh: true` bypasses Next's data cache entirely, used by the interactive
 *  Resolve-a-DID widget so a new registration or evaluation shows at once.
 *  The default cached mode is for background aggregation (the
 *  latest-trusted-ecosystems scan, the demo-service lookup). */
export async function resolveDid(
  did: string,
  timeoutMs = 30_000,
  opts: { fresh?: boolean } = {}
): Promise<Resolution | null> {
  const res = await fetch(`${INDEXER_URL}/v4/verifiable-trust/resolve`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      did,
      ecsCredentials: true,
      presentations: { unresolvableCredentialIds: true, invalidCredentialIds: true },
    }),
    ...(opts.fresh ? { cache: "no-store" as const } : { next: { revalidate: 600 } }),
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`indexer resolve failed: ${res.status}`);
  return (await res.json()) as Resolution;
}

/** Every DID the indexer can resolve (IDX-VT-QRY-3), all pages. */
async function listIndexedDids(): Promise<string[]> {
  const dids: string[] = [];
  let cursor: string | null = null;
  // Bounded: 10 pages of 10,000 DIDs is far beyond any current network.
  for (let page = 0; page < 10; page++) {
    const url =
      `${INDEXER_URL}/v4/verifiable-trust/dids?limit=10000` +
      (cursor ? `&cursor=${encodeURIComponent(cursor)}` : "");
    const res = await fetch(url, {
      next: { revalidate: 600 },
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) throw new Error(`indexer dids failed: ${res.status}`);
    const data = (await res.json()) as { dids?: string[]; nextCursor?: string | null };
    dids.push(...(data.dids ?? []));
    cursor = data.nextCursor ?? null;
    if (!cursor) break;
  }
  return dids;
}

/**
 * Resolve the service served at the root of `host`: the did:web:{host} or
 * did:webvh:{scid}:{host} DID the indexer knows. A did:webvh changes with
 * every fresh agent, so the demo services are listed by host and their
 * current DID is looked up here. A redeployed host can leave older DIDs in
 * the index; the trusted one with the latest evaluation wins. Null when no
 * DID of that host is in the registry.
 */
export async function resolveServiceHost(
  host: string,
  opts: { fresh?: boolean } = {}
): Promise<Resolution | null> {
  const candidates = (await listIndexedDids()).filter((did) => {
    const parts = did.split(":");
    if (parts[1] === "web") return parts.length === 3 && parts[2] === host;
    if (parts[1] === "webvh") return parts.length === 4 && parts[3] === host;
    return false;
  });
  const resolved = await Promise.all(
    candidates.map((did) => resolveDid(did, 30_000, opts).catch(() => null))
  );
  const found = resolved.filter((r): r is Resolution => r !== null);
  found.sort(
    (a, b) =>
      Number(b.trusted) - Number(a.trusted) ||
      b.evaluatedAtBlock - a.evaluatedAtBlock
  );
  return found[0] ?? null;
}

/** Pick a display name out of a resolution (ECS credential claims). */
export function resolvedName(r: Resolution): string | null {
  for (const schema of ["ServiceCredential", "OrganizationCredential", "PersonaCredential"]) {
    const cred = r.ecsCredentials?.find((c) => c.ecsSchema === schema);
    const name = cred?.credentialSubject?.name;
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
 * Latest trusted ecosystems (spec-v2 §2.2): list the newest ecosystems,
 * trust-resolve each DID, and keep only the trusted ones. Scan is bounded so a
 * network full of e2e artifacts cannot stall the render; the widget's empty
 * state handles a zero-result scan.
 */
export async function getLatestTrustedEcosystems(
  want = 10,
  scanCap = 40
): Promise<TrustedEcosystem[]> {
  const ecosystems = await listEcosystems(scanCap);
  const out: TrustedEcosystem[] = [];
  const batchSize = 8;

  for (let i = 0; i < ecosystems.length && out.length < want; i += batchSize) {
    const batch = ecosystems.slice(i, i + batchSize);
    const results = await Promise.all(
      batch.map(async (eco) => {
        try {
          const r = await resolveDid(eco.did, 8_000);
          if (!r?.trusted) return null;
          return {
            id: eco.id,
            did: eco.did,
            name: resolvedName(r) ?? eco.did,
            created: eco.created,
            activeSchemas: eco.active_schemas,
            participants: eco.participants,
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
