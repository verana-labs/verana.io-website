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
import type {
  ResolveResult,
  ResolvedCredential,
  PotEnrichment,
} from "../lib/verana";

// Renders a trust-resolution result as a Proof-of-Trust card (spec-v2 §2.3):
// service identity (ECS-Service claims), the organization or person behind it
// (ECS-Org / ECS-Persona claims), the trust chain, and the status. UNTRUSTED
// is a first-class result: the failed credentials teach verify-first.
// Optional enrichment (from the DID documents) adds credential logos and
// links to the Linked Verifiable Presentations.

function claimStr(c: ResolvedCredential | undefined, key: string): string | null {
  const v = c?.claims?.[key];
  return typeof v === "string" && v.length > 0 ? v : null;
}

/** ISO 3166-1 alpha-2 country code as an emoji flag (e.g. "IN" -> 🇮🇳). */
function countryFlag(code: string): string | null {
  if (!/^[A-Za-z]{2}$/.test(code)) return null;
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map((c) => 127397 + c.charCodeAt(0))
  );
}

/** Host behind a did:web / did:webvh DID; null for other methods.
 *  (Local copy of lib/verana's didServiceHost to keep the client bundle lean.) */
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

function BlockEyebrow({
  icon,
  label,
  vpUrl,
}: {
  icon: typeof faServer;
  label: string;
  vpUrl?: string;
}) {
  return (
    <span className="eyebrow flex items-center gap-2">
      <FontAwesomeIcon icon={icon} className="h-3 w-3" />
      {label}
      {vpUrl ? (
        <a
          href={vpUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Open the verifiable credential"
          aria-label={`Open the ${label} credential in a new tab`}
          className="text-muted transition-colors hover:text-accent"
        >
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
        </a>
      ) : null}
    </span>
  );
}

export default function ProofOfTrustCard({
  result,
  enrichment = {},
}: {
  result: ResolveResult;
  enrichment?: PotEnrichment;
}) {
  const trusted = result.trustStatus === "TRUSTED";
  const service = result.credentials?.find((c) => c.ecsType === "ECS-SERVICE");
  const org = result.credentials?.find(
    (c) => c.ecsType === "ECS-ORG" || c.ecsType === "ECS-PERSONA"
  );
  const serviceExtras = enrichment["ECS-SERVICE"];
  const orgExtras = org ? enrichment[org.ecsType] : undefined;

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
        <span className="ml-auto font-mono text-[11px] text-muted">
          block {result.evaluatedAtBlock}
        </span>
      </div>

      <div className="grid gap-6 p-5 sm:grid-cols-2">
        {/* the actor */}
        <div>
          <BlockEyebrow icon={faServer} label="Service" vpUrl={serviceExtras?.vpUrl} />
          {service ? (
            <div className="mt-2 flex items-start gap-3">
              <CredentialLogo
                logo={serviceExtras?.logo}
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
              No ECS-Service credential presented.
            </p>
          )}
        </div>

        {/* the backing */}
        <div>
          <BlockEyebrow icon={faBuilding} label="Operated by" vpUrl={orgExtras?.vpUrl} />
          {org ? (
            <div className="mt-2 flex items-start gap-3">
              <CredentialLogo
                logo={orgExtras?.logo}
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
              No ECS-Organization or ECS-Persona credential presented.
            </p>
          )}
        </div>
      </div>

      {/* trust chain */}
      {result.credentials?.length ? (
        <div className="border-t border-rule px-5 py-4">
          <span className="eyebrow flex items-center gap-2">
            <FontAwesomeIcon icon={faLink} className="h-3 w-3" />
            Trust chain
          </span>
          <ul className="mt-3 space-y-2">
            {result.credentials.map((c) => (
              <li
                key={`${c.ecsType}-${c.id}`}
                className="flex flex-wrap items-center gap-2 text-xs"
              >
                <span className="chip">{c.ecsType}</span>
                <DidLink did={c.issuedBy} className="text-muted" />
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="h-3 w-3 text-muted"
                />
                <DidLink did={c.presentedBy} className="text-muted" />
                {c.result === "VALID" ? (
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="h-3 w-3 text-success-ink"
                  />
                ) : (
                  <span className="font-mono text-muted">{c.result}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* failures: first-class, this is what verify-first looks like */}
      {result.failedCredentials?.length ? (
        <div className="border-t border-rule px-5 py-4">
          <span className="eyebrow flex items-center gap-2">
            <FontAwesomeIcon icon={faCircleXmark} className="h-3 w-3" />
            Failed verification
          </span>
          <ul className="mt-3 space-y-2">
            {result.failedCredentials.map((f, i) => (
              <li key={`${f.id}-${i}`} className="text-xs text-muted">
                <span className="break-all font-mono">{f.id}</span>
                <p className="mt-1">{f.error}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
