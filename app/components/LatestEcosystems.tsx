import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faSitemap,
  faSeedling,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
  getLatestTrustedEcosystems,
  NETWORK_NAME,
  NETWORK_APP_URL,
  type TrustedEcosystem,
} from "../lib/verana";

// Latest trusted ecosystems (spec-v2 §2.2): the newest ecosystems on the
// network that trust-resolve as TRUSTED, live from the indexer + resolver.
// Server component; the fetch layer caches so renders stay cheap.

/** Middle-ellipsis truncation so long DIDs fit on one line. */
function shortDid(did: string, max = 40): string {
  if (did.length <= max) return did;
  const head = Math.ceil((max - 3) * 0.6);
  const tail = max - 3 - head;
  return `${did.slice(0, head)}...${did.slice(-tail)}`;
}

function EcosystemRow({ e }: { e: TrustedEcosystem }) {
  return (
    <li className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip chip-verified">
            <FontAwesomeIcon icon={faShieldHalved} className="h-3 w-3" />
            Trusted
          </span>
          <a
            href={`${NETWORK_APP_URL}/tr/${e.id}`}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open ecosystem ${e.id} on the network frontend`}
            className="group inline-flex items-center gap-1.5 font-medium text-ink hover:text-accent"
          >
            {e.name}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-3 w-3 text-muted transition-colors group-hover:text-accent"
            />
          </a>
        </div>
        <p className="mt-1 font-mono text-[11px] text-muted" title={e.did}>
          {shortDid(e.did)}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-4 font-mono text-xs text-muted">
        <span>{e.activeSchemas} schemas</span>
        <span>{e.participants} participants</span>
        <span>{new Date(e.created).toISOString().slice(0, 10)}</span>
      </div>
    </li>
  );
}

export default async function LatestEcosystems({ limit = 10 }: { limit?: number }) {
  let ecosystems: TrustedEcosystem[] = [];
  let failed = false;
  try {
    ecosystems = await getLatestTrustedEcosystems(limit);
  } catch {
    failed = true;
  }

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-2 border-b border-rule bg-surface-2 px-5 py-3">
        <FontAwesomeIcon icon={faSitemap} className="h-3.5 w-3.5 text-muted" />
        <span className="font-mono text-xs uppercase tracking-wider text-muted">
          Latest trusted ecosystems · live from {NETWORK_NAME}
        </span>
      </div>

      {ecosystems.length > 0 ? (
        <ul className="divide-y divide-rule">
          {ecosystems.map((e) => (
            <EcosystemRow key={e.id} e={e} />
          ))}
        </ul>
      ) : (
        <div className="flex items-start gap-3 p-6 text-sm text-muted">
          <FontAwesomeIcon
            icon={faSeedling}
            className="mt-0.5 h-4 w-4 shrink-0"
          />
          <p>
            {failed
              ? `The ${NETWORK_NAME} indexer could not be reached right now. The list refreshes automatically, check back shortly.`
              : `No trusted ecosystems found on ${NETWORK_NAME} right now. Ecosystems appear here as soon as they register and their credentials verify against the public registry.`}
          </p>
        </div>
      )}
    </div>
  );
}
