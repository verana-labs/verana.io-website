import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faBuilding,
  faServer,
  faCircleCheck,
  faCircleXmark,
  faLink,
  faArrowRightLong,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import type { ResolvePayload, EcsCredential } from "../lib/verana";

// Renders a trust resolution of the indexer (POST /v4/verifiable-trust/resolve)
// as a Proof-of-Trust card (spec-v2 §2.3): service identity (ECS-Service
// claims), the organization or person behind it (ECS-Organization /
// ECS-Persona claims), the trust chain, the Linked Verifiable Presentations,
// and the status. UNTRUSTED is a first-class result: the failed credentials,
// or the absence from the registry, teach verify-first.

const ECS_LABELS: Record<string, string> = {
  ServiceCredential: "ECS-Service",
  OrganizationCredential: "ECS-Organization",
  PersonaCredential: "ECS-Persona",
  UserAgentCredential: "ECS-UserAgent",
  BadgeCredential: "ECS-Badge",
};

function claimStr(c: EcsCredential | undefined, key: string): string | null {
  const v = c?.credentialSubject?.[key];
  return typeof v === "string" && v.length > 0 ? v : null;
}

/** Credential logo: the ECS `logoUri` claim (v4), or the inline `logo` (v1). */
function claimLogo(c: EcsCredential | undefined): string | undefined {
  for (const key of ["logoUri", "logo"]) {
    const v = claimStr(c, key);
    if (v && (v.startsWith("https://") || v.startsWith("data:image/"))) return v;
  }
  return undefined;
}

/** Issuer DID of a credential: its id is "<issuer DID>#<uuid>", or the DID
 *  itself for a self-issued credential. */
function issuerDid(c: EcsCredential): string | null {
  const did = c.id.split("#")[0];
  return did.startsWith("did:") ? did : null;
}

/** ISO 3166-1 alpha-2 country code as an emoji flag (e.g. "IN" -> 🇮🇳). */
function countryFlag(code: string): string | null {
  if (!/^[A-Za-z]{2}$/.test(code)) return null;
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map((c) => 127397 + c.charCodeAt(0))
  );
}

/** Host behind a did:web / did:webvh DID; null for other methods. */
function serviceHost(did: string): string | null {
  const parts = did.split(":");
  let host: string | undefined;
  if (parts[1] === "web") host = parts[2];
  else if (parts[1] === "webvh") host = parts[3];
  if (!host) return null;
  host = decodeURIComponent(host);
  return /^[a-zA-Z0-9.-]+(?::\d+)?$/.test(host) ? host : null;
}

/** A DID, linked to the root server of the service for web/webvh methods. */
function DidLink({ did, className = "" }: { did: string; className?: string }) {
  const host = serviceHost(did);
  if (!host) {
    return <span className={`break-all font-mono ${className}`}>{did}</span>;
  }
  return (
    <a
      href={`https://${host}/`}
      target="_blank"
      rel="noopener noreferrer"
      title={`Open https://${host}/`}
      className={`break-all font-mono underline-offset-2 hover:text-accent hover:underline ${className}`}
    >
      {did}
    </a>
  );
}

function CredentialLogo({ logo, alt }: { logo?: string; alt: string }) {
  if (!logo) return null;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={alt}
      className="h-10 w-10 shrink-0 rounded-lg border border-rule bg-surface-2 object-contain p-1"
    />
  );
}

function BlockEyebrow({ icon, label }: { icon: typeof faServer; label: string }) {
  return (
    <span className="eyebrow flex items-center gap-2">
      <FontAwesomeIcon icon={icon} className="h-3 w-3" />
      {label}
    </span>
  );
}

export default function ProofOfTrustCard({ result }: { result: ResolvePayload }) {
  const trusted = result.found && result.trusted;
  const credentials = result.found ? (result.ecsCredentials ?? []) : [];
  const presentations = result.found ? (result.presentations ?? []) : [];
  const service = credentials.find((c) => c.ecsSchema === "ServiceCredential");
  const org = credentials.find(
    (c) =>
      c.ecsSchema === "OrganizationCredential" ||
      c.ecsSchema === "PersonaCredential"
  );
  // Linked VPs, once each (a VP can be linked by several DID services).
  const vpUrls = [
    ...new Set(
      presentations.map((p) => p.id).filter((u) => u.startsWith("https://"))
    ),
  ];
  // Invalid credentials are failures. Unresolvable ones are listed only for an
  // untrusted DID, where they explain the verdict: a trusted DID's schema
  // credentials (VTJSCs) are reported unresolvable too, without consequence.
  const failed = presentations.flatMap((p) => [
    ...(p.invalidCredentialIds ?? []).map((id) => ({
      id,
      reason: "Presented, but failed verification.",
    })),
    ...(trusted ? [] : (p.unresolvableCredentialIds ?? [])).map((id) => ({
      id,
      reason: "Presented, but could not be dereferenced.",
    })),
  ]);

  return (
    <div className="card overflow-hidden">
      {/* status band */}
      <div className="flex flex-wrap items-center gap-3 border-b border-rule bg-surface-2 px-5 py-3">
        {trusted ? (
          <span className="chip chip-verified pot-verified">
            <FontAwesomeIcon icon={faShieldHalved} className="h-3 w-3" />
            Trusted
          </span>
        ) : (
          <span className="chip">
            <FontAwesomeIcon icon={faCircleXmark} className="h-3 w-3" />
            Untrusted
          </span>
        )}
        <DidLink did={result.did} className="text-[11px] text-muted" />
        {result.found ? (
          <span className="ml-auto font-mono text-[11px] text-muted">
            block {result.evaluatedAtBlock}
          </span>
        ) : null}
      </div>

      {result.found ? (
        <div className="grid gap-6 p-5 sm:grid-cols-2">
          {/* the actor */}
          <div>
            <BlockEyebrow icon={faServer} label="Service" />
            {service ? (
              <div className="mt-2 flex items-start gap-3">
                <CredentialLogo
                  logo={claimLogo(service)}
                  alt={`${claimStr(service, "name") ?? "Service"} logo`}
                />
                <div>
                  <p className="font-semibold text-ink">
                    {claimStr(service, "name") ?? "Unnamed service"}
                  </p>
                  {claimStr(service, "type") ? (
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      {claimStr(service, "type")}
                    </p>
                  ) : null}
                  {claimStr(service, "description") ? (
                    <p className="mt-2 text-sm text-muted">
                      {claimStr(service, "description")}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : (
              <p className="mt-2 text-sm text-muted">
                No verified ECS-Service credential.
              </p>
            )}
          </div>

          {/* the backing */}
          <div>
            <BlockEyebrow icon={faBuilding} label="Operated by" />
            {org ? (
              <div className="mt-2 flex items-start gap-3">
                <CredentialLogo
                  logo={claimLogo(org)}
                  alt={`${claimStr(org, "name") ?? "Organization"} logo`}
                />
                <div>
                  <p className="font-semibold text-ink">
                    {(() => {
                      const code = claimStr(org, "countryCode");
                      const flag = code ? countryFlag(code) : null;
                      return flag ? (
                        <span
                          role="img"
                          aria-label={`Country: ${code}`}
                          title={code ?? undefined}
                          className="mr-1.5"
                        >
                          {flag}
                        </span>
                      ) : null;
                    })()}
                    {claimStr(org, "name") ?? "Unnamed organization"}
                  </p>
                  {claimStr(org, "registryId") ? (
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      {claimStr(org, "registryId")}
                    </p>
                  ) : null}
                  {claimStr(org, "address") ? (
                    <p className="mt-2 text-sm text-muted">{claimStr(org, "address")}</p>
                  ) : null}
                </div>
              </div>
            ) : (
              <p className="mt-2 text-sm text-muted">
                No verified ECS-Organization or ECS-Persona credential.
              </p>
            )}
          </div>
        </div>
      ) : (
        <p className="p-5 text-sm text-muted">
          Not in the public registry on {result.network}: this DID is not the
          DID of any registered corporation, ecosystem, or participant, so
          nothing it presents can be verified.
        </p>
      )}

      {/* trust chain: issuer -> presenter, for each verified ECS credential */}
      {credentials.length ? (
        <div className="border-t border-rule px-5 py-4">
          <span className="eyebrow flex items-center gap-2">
            <FontAwesomeIcon icon={faLink} className="h-3 w-3" />
            Trust chain
          </span>
          <ul className="mt-3 space-y-2">
            {credentials.map((c) => {
              const issuer = issuerDid(c);
              return (
                <li
                  key={`${c.ecsSchema}-${c.id}`}
                  className="flex flex-wrap items-center gap-2 text-xs"
                >
                  <span
                    className="chip"
                    title={`Ecosystem ${c.ecosystemId}, credential schema ${c.credentialSchemaId}`}
                  >
                    {ECS_LABELS[c.ecsSchema] ?? c.ecsSchema}
                  </span>
                  {issuer ? (
                    <DidLink did={issuer} className="text-muted" />
                  ) : (
                    <span className="font-mono text-muted">
                      participant {c.issuerParticipantId}
                    </span>
                  )}
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="h-3 w-3 text-muted"
                  />
                  <DidLink did={result.did} className="text-muted" />
                  {/* the indexer lists only the credentials it verified */}
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="h-3 w-3 text-success-ink"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {/* failures: first-class, this is what verify-first looks like */}
      {failed.length ? (
        <div className="border-t border-rule px-5 py-4">
          <span className="eyebrow flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleXmark} className="h-3 w-3" />
            Failed verification
          </span>
          <ul className="mt-3 space-y-2">
            {failed.map((f, i) => (
              <li key={`${f.id}-${i}`} className="text-xs text-muted">
                <span className="break-all font-mono">{f.id}</span>
                <p className="mt-1">{f.reason}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* where the credentials are published */}
      {vpUrls.length ? (
        <div className="border-t border-rule px-5 py-4">
          <span className="eyebrow flex items-center gap-2">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
            Linked Verifiable Presentations
          </span>
          <ul className="mt-3 flex flex-wrap gap-2">
            {vpUrls.map((url) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={url}
                  className="chip font-mono transition-colors hover:text-accent"
                >
                  {url.split("/").pop() || url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
