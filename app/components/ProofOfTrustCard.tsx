import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faBuilding,
  faServer,
  faCircleCheck,
  faCircleXmark,
  faLink,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import type { ResolveResult, ResolvedCredential } from "../lib/verana";

// Renders a trust-resolution result as a Proof-of-Trust card (spec-v2 §2.3):
// service identity (ECS-Service claims), the organization or person behind it
// (ECS-Org / ECS-Persona claims), the trust chain, and the status. UNTRUSTED
// is a first-class result: the failed credentials teach verify-first.

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

export default function ProofOfTrustCard({ result }: { result: ResolveResult }) {
  const trusted = result.trustStatus === "TRUSTED";
  const service = result.credentials?.find((c) => c.ecsType === "ECS-SERVICE");
  const org = result.credentials?.find(
    (c) => c.ecsType === "ECS-ORG" || c.ecsType === "ECS-PERSONA"
  );

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
        <span className="break-all font-mono text-[11px] text-muted">
          {result.did}
        </span>
        <span className="ml-auto font-mono text-[11px] text-muted">
          block {result.evaluatedAtBlock}
        </span>
      </div>

      <div className="grid gap-6 p-5 sm:grid-cols-2">
        {/* the actor */}
        <div>
          <span className="eyebrow flex items-center gap-2">
            <FontAwesomeIcon icon={faServer} className="h-3 w-3" />
            Service
          </span>
          {service ? (
            <>
              <p className="mt-2 font-semibold text-ink">
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
            </>
          ) : (
            <p className="mt-2 text-sm text-muted">
              No ECS-Service credential presented.
            </p>
          )}
        </div>

        {/* the backing */}
        <div>
          <span className="eyebrow flex items-center gap-2">
            <FontAwesomeIcon icon={faBuilding} className="h-3 w-3" />
            Operated by
          </span>
          {org ? (
            <>
              <p className="mt-2 font-semibold text-ink">
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
            </>
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
                <span className="break-all font-mono text-muted">
                  {c.issuedBy}
                </span>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="h-3 w-3 text-muted"
                />
                <span className="break-all font-mono text-muted">
                  {c.presentedBy}
                </span>
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
