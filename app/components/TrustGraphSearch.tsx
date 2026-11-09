"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faShieldHalved,
  faSitemap,
  faTableList,
  faIdBadge,
  faSpinner,
  faTriangleExclamation,
  faArrowUpRightFromSquare,
  faCircleNodes,
  faBoxArchive,
} from "@fortawesome/free-solid-svg-icons";
import {
  SERVICE_TYPE_FACET,
  type GraphDidHit,
  type GraphEcosystemHit,
  type GraphFacet,
  type GraphHit,
  type GraphSchemaHit,
  type GraphSearchResponse,
  type GraphSurface,
  type GraphOperator,
} from "../lib/graph";

// Query the Trust Graph, live: type a word, pick a surface (services,
// ecosystems, credential schemas), filter services by their declared
// category. Every request goes through /api/graph/search; only trusted,
// non-expired DIDs pass the graph's default gates, so every hit shown here
// verified against the public registry.

const SURFACES: { id: GraphSurface; label: string; icon: IconDefinition }[] = [
  { id: "Did", label: "Services", icon: faIdBadge },
  { id: "Ecosystem", label: "Ecosystems", icon: faSitemap },
  { id: "CredentialSchema", label: "Credential schemas", icon: faTableList },
];

const PLACEHOLDER: Record<GraphSurface, string> = {
  Did: "search services by name, operator, description...",
  Ecosystem: "search ecosystems by name or operator...",
  CredentialSchema: "search credential schemas by title or description...",
};

const SERVICE_TYPE_LABELS: Record<string, string> = {
  AI_AGENT: "AI agent",
  CHATBOT: "Chatbot",
  WEB_PORTAL: "Web portal",
  ISSUER: "Issuer",
  VERIFIER: "Verifier",
  IssuerService: "Issuer service",
  VerifierService: "Verifier service",
  EcosystemService: "Ecosystem service",
  TrustRegistryService: "Trust registry service",
};

const ENDPOINT_LABELS: Record<string, string | null> = {
  "did-communication": "DIDComm v1",
  DIDCommMessaging: "DIDComm v2",
  LinkedDomains: "Linked domains",
  VsAgentAdminAPI: "VS Agent admin API",
  relativeRef: null, // the DID's own file host, not a protocol
  LinkedVerifiablePresentation: null,
};

const ROLE_LABELS: Record<string, [string, string]> = {
  ISSUER: ["issuer", "issuers"],
  VERIFIER: ["verifier", "verifiers"],
  HOLDER: ["holder", "holders"],
  ECOSYSTEM: ["ecosystem", "ecosystems"],
  ISSUER_GRANTOR: ["issuer grantor", "issuer grantors"],
  VERIFIER_GRANTOR: ["verifier grantor", "verifier grantors"],
};

/** AI_AGENT -> "AI agent", IssuerService -> "Issuer service" (unknown codes). */
function humanizeType(code: string): string {
  if (SERVICE_TYPE_LABELS[code]) return SERVICE_TYPE_LABELS[code];
  const words = code
    .replace(/_/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/** ISO 3166-1 alpha-2 country code as an emoji flag. */
function countryFlag(code: string): string | null {
  if (!/^[A-Za-z]{2}$/.test(code)) return null;
  return String.fromCodePoint(
    ...[...code.toUpperCase()].map((c) => 127397 + c.charCodeAt(0))
  );
}

function pluralize(n: number, [one, many]: [string, string]): string {
  return `${n.toLocaleString("en-US")} ${n === 1 ? one : many}`;
}

function Logo({ src, alt, icon }: { src?: string | null; alt: string; icon: IconDefinition }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed && (src.startsWith("https://") || src.startsWith("data:image/"))) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className="h-10 w-10 shrink-0 rounded-lg border border-rule bg-surface-2 object-contain p-1"
      />
    );
  }
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-rule bg-surface-2 text-muted">
      <FontAwesomeIcon icon={icon} className="h-4 w-4" />
    </span>
  );
}

function TrustChip({ trusted, expired }: { trusted: boolean; expired: boolean }) {
  if (trusted && !expired) {
    return (
      <span className="chip chip-verified">
        <FontAwesomeIcon icon={faShieldHalved} className="h-3 w-3" />
        Trusted
      </span>
    );
  }
  return (
    <span className="chip">
      <FontAwesomeIcon icon={faShieldHalved} className="h-3 w-3" />
      {expired ? "Trust expired" : "Untrusted"}
    </span>
  );
}

function OperatorLine({ operator }: { operator: GraphOperator | null | undefined }) {
  if (!operator) {
    return <p className="text-sm text-muted">operator not yet verified</p>;
  }
  const flag = countryFlag(operator.countryCode);
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-sm text-muted">
      {flag ? (
        <span aria-label={operator.countryCode} title={operator.countryCode}>
          {flag}
        </span>
      ) : null}
      <span className="text-ink">{operator.name}</span>
      <span className="font-mono text-[11px] uppercase tracking-wider">
        {operator.kind}
      </span>
      {operator.registryId ? (
        <span className="font-mono text-[11px]">{operator.registryId}</span>
      ) : null}
    </p>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-rule px-1.5 py-0.5 font-mono text-[10px] text-muted">
      {children}
    </span>
  );
}

function DidCard({ hit }: { hit: GraphDidHit }) {
  const s = hit.snippet;
  const name = s.service?.name ?? s.did;
  const endpoints = [
    ...new Set(
      (s.endpoints ?? [])
        .map((e) => (e.type in ENDPOINT_LABELS ? ENDPOINT_LABELS[e.type] : e.type))
        .filter((l): l is string => typeof l === "string" && l.length > 0)
    ),
  ];
  return (
    <div className="flex gap-4 px-4 py-4">
      <Logo src={s.service?.logoUri ?? s.operator?.logoUri} alt="" icon={faIdBadge} />
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-ink">{name}</span>
          {s.service ? (
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {humanizeType(s.service.type)}
            </span>
          ) : null}
          <TrustChip trusted={s.trusted} expired={s.isTrustExpired} />
          {s.isEcosystem ? (
            <span className="chip">
              <FontAwesomeIcon icon={faSitemap} className="h-3 w-3" />
              Ecosystem
            </span>
          ) : null}
        </div>
        <OperatorLine operator={s.operator} />
        {s.service?.description ? (
          <p className="line-clamp-2 text-sm text-muted">{s.service.description}</p>
        ) : null}
        <p className="break-all font-mono text-[11px] text-muted opacity-70">{s.did}</p>
        {endpoints.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {endpoints.map((e) => (
              <Tag key={e}>{e}</Tag>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function EcosystemCard({ hit, appUrl }: { hit: GraphEcosystemHit; appUrl: string }) {
  const s = hit.snippet;
  const card = s.didCard;
  const name = card?.service?.name ?? s.did;
  const roles = Object.entries(s.stats?.participants ?? {})
    .filter(([role, n]) => role in ROLE_LABELS && n > 0)
    .sort(([a], [b]) => Object.keys(ROLE_LABELS).indexOf(a) - Object.keys(ROLE_LABELS).indexOf(b));
  return (
    <div className="flex gap-4 px-4 py-4">
      <Logo src={card?.service?.logoUri ?? card?.operator?.logoUri} alt="" icon={faSitemap} />
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-ink">{name}</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Ecosystem {s.id}
          </span>
          {card ? <TrustChip trusted={card.trusted} expired={card.isTrustExpired} /> : null}
          {s.archived ? (
            <span className="chip">
              <FontAwesomeIcon icon={faBoxArchive} className="h-3 w-3" />
              Archived
            </span>
          ) : null}
        </div>
        <OperatorLine operator={card?.operator} />
        {card?.service?.description ? (
          <p className="line-clamp-2 text-sm text-muted">{card.service.description}</p>
        ) : null}
        <p className="break-all font-mono text-[11px] text-muted opacity-70">{s.did}</p>
        {s.stats ? (
          <p className="font-mono text-[11px] text-muted">
            {[
              ...roles.map(([role, n]) => pluralize(n, ROLE_LABELS[role])),
              `${s.stats.issuedCredentials.toLocaleString("en-US")} credentials issued`,
            ].join(" · ")}
          </p>
        ) : null}
        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          {(s.schemas ?? [])
            .filter((sc) => !sc.archived)
            .slice(0, 6)
            .map((sc) => (
              <Tag key={sc.id}>{sc.title}</Tag>
            ))}
          <a
            href={`${appUrl}/ecosystems/${s.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-muted hover:text-ink"
          >
            open in the network app
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

function SchemaCard({ hit, appUrl }: { hit: GraphSchemaHit; appUrl: string }) {
  const s = hit.snippet;
  return (
    <div className="flex gap-4 px-4 py-4">
      <Logo src={null} alt="" icon={faTableList} />
      <div className="min-w-0 flex-1 space-y-1.5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-medium text-ink">{s.schema?.title ?? `Schema ${s.id}`}</span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
            Schema {s.id}
          </span>
          {s.schema?.type ? <Tag>{s.schema.type}</Tag> : null}
          {s.archived ? (
            <span className="chip">
              <FontAwesomeIcon icon={faBoxArchive} className="h-3 w-3" />
              Archived
            </span>
          ) : null}
        </div>
        {s.schema?.description ? (
          <p className="line-clamp-2 text-sm text-muted">{s.schema.description}</p>
        ) : null}
        {s.schema?.digestSri ? (
          <p className="break-all font-mono text-[11px] text-muted opacity-70">
            {s.schema.digestSri}
          </p>
        ) : null}
        {s.ecosystem ? (
          <a
            href={`${appUrl}/ecosystems/${s.ecosystem.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted hover:text-ink"
          >
            ecosystem {s.ecosystem.id} in the network app
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

function HitCard({ hit, appUrl }: { hit: GraphHit; appUrl: string }) {
  switch (hit.type) {
    case "Did":
      return <DidCard hit={hit} />;
    case "Ecosystem":
      return <EcosystemCard hit={hit} appUrl={appUrl} />;
    case "CredentialSchema":
      return <SchemaCard hit={hit} appUrl={appUrl} />;
  }
}

type Page = Pick<GraphSearchResponse, "totalCount" | "hits" | "cursor">;

export default function TrustGraphSearch({
  network,
  appUrl,
}: {
  network: string;
  appUrl: string;
}) {
  const [surface, setSurface] = useState<GraphSurface>("Did");
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [typeFacet, setTypeFacet] = useState<GraphFacet>([]);
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const seq = useRef(0);

  // Debounce keystrokes: the graph is queried 300ms after typing stops.
  useEffect(() => {
    const t = setTimeout(() => setQuery(text.trim()), 300);
    return () => clearTimeout(t);
  }, [text]);

  async function fetchPage(cursor: string | null): Promise<GraphSearchResponse | null> {
    const mine = ++seq.current;
    const params = new URLSearchParams({ surface, q: query });
    if (surface === "Did" && typeFilter) params.set("type", typeFilter);
    if (cursor) params.set("cursor", cursor);
    try {
      const res = await fetch(`/api/graph/search?${params}`);
      const data = await res.json();
      if (mine !== seq.current) return null; // a newer query superseded this one
      if (!res.ok) {
        setError(data?.message ?? "The Trust Graph could not be reached.");
        return null;
      }
      setError(null);
      return data as GraphSearchResponse;
    } catch {
      if (mine !== seq.current) return null;
      setError("The Trust Graph could not be reached. Try again shortly.");
      return null;
    }
  }

  // A new query (surface, text or filter) replaces the result list.
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchPage(null).then((data) => {
      if (cancelled) return;
      setLoading(false);
      if (!data) return;
      setPage({ totalCount: data.totalCount, hits: data.hits, cursor: data.cursor });
      // Keep the category chips of the unfiltered query so a filtered view
      // still offers the other categories.
      if (surface === "Did" && !typeFilter) {
        setTypeFacet(data.facets?.[SERVICE_TYPE_FACET] ?? []);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [surface, query, typeFilter]);

  async function loadMore() {
    if (!page?.cursor || loadingMore) return;
    setLoadingMore(true);
    const data = await fetchPage(page.cursor);
    setLoadingMore(false);
    if (!data) return;
    setPage((prev) =>
      prev
        ? { totalCount: data.totalCount, hits: [...prev.hits, ...data.hits], cursor: data.cursor }
        : { totalCount: data.totalCount, hits: data.hits, cursor: data.cursor }
    );
  }

  function pickSurface(next: GraphSurface) {
    if (next === surface) return;
    setSurface(next);
    setTypeFilter("");
    setPage(null);
  }

  const activeSurface = SURFACES.find((s) => s.id === surface)!;
  const hits = page?.hits ?? [];
  const showEmpty = !loading && !error && page !== null && hits.length === 0;

  return (
    <div className="card overflow-hidden">
      {/* query bar */}
      <div className="border-b border-rule bg-surface-2 px-4 py-3">
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-rule bg-surface px-3 py-2.5">
            <FontAwesomeIcon
              icon={loading ? faSpinner : faMagnifyingGlass}
              spin={loading}
              className="h-3.5 w-3.5 shrink-0 text-muted"
            />
            <input
              type="search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={PLACEHOLDER[surface]}
              aria-label={`Search ${activeSurface.label.toLowerCase()} in the Trust Graph`}
              autoComplete="off"
              spellCheck={false}
              maxLength={200}
              className="w-full min-w-0 bg-transparent font-mono text-sm text-ink outline-none placeholder:text-muted"
            />
          </label>
          <span className="chip shrink-0">
            <FontAwesomeIcon icon={faCircleNodes} className="h-3 w-3" />
            Live · {network}
          </span>
        </div>

        {/* surfaces */}
        <div className="mt-3 flex flex-wrap items-center gap-2" role="tablist" aria-label="What to search">
          {SURFACES.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={s.id === surface}
              onClick={() => pickSurface(s.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] transition-colors ${
                s.id === surface
                  ? "border-accent text-ink"
                  : "border-rule text-muted hover:text-ink"
              }`}
            >
              <FontAwesomeIcon icon={s.icon} className="h-3 w-3" />
              {s.label}
            </button>
          ))}
          {page ? (
            <span className="ml-auto font-mono text-[11px] text-muted" aria-live="polite">
              {page.totalCount.toLocaleString("en-US")}{" "}
              {page.totalCount === 1 ? "result" : "results"} · ranked by trust
            </span>
          ) : null}
        </div>

        {/* service category filter */}
        {surface === "Did" && typeFacet.length > 0 ? (
          <div className="mt-3 flex flex-wrap items-center gap-1.5" aria-label="Filter by service category">
            <button
              type="button"
              onClick={() => setTypeFilter("")}
              aria-pressed={typeFilter === ""}
              className={`rounded border px-1.5 py-0.5 font-mono text-[10px] transition-colors ${
                typeFilter === "" ? "border-accent text-ink" : "border-rule text-muted hover:text-ink"
              }`}
            >
              all categories
            </button>
            {typeFacet.slice(0, 10).map((f) => {
              const value = String(f.value);
              const active = typeFilter === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setTypeFilter(active ? "" : value)}
                  aria-pressed={active}
                  className={`rounded border px-1.5 py-0.5 font-mono text-[10px] transition-colors ${
                    active ? "border-accent text-ink" : "border-rule text-muted hover:text-ink"
                  }`}
                >
                  {humanizeType(value)} {f.count}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      {/* results */}
      <div
        className={`divide-y divide-rule transition-opacity ${loading && hits.length > 0 ? "opacity-50" : ""}`}
        aria-busy={loading}
      >
        {error ? (
          <div className="flex items-center gap-3 px-4 py-5 text-sm text-muted">
            <FontAwesomeIcon icon={faTriangleExclamation} className="h-4 w-4 shrink-0" />
            {error}
          </div>
        ) : null}

        {loading && hits.length === 0 && !error ? (
          <div className="px-4 py-5 font-mono text-xs text-muted">querying the trust graph...</div>
        ) : null}

        {showEmpty ? (
          <div className="px-4 py-5 text-sm text-muted">
            {query ? (
              <>
                No {activeSurface.label.toLowerCase()} match &ldquo;{query}&rdquo;
                {typeFilter ? ` in ${humanizeType(typeFilter).toLowerCase()}` : ""} on {network}.
                Matching is by whole word: try &ldquo;agent&rdquo; rather than &ldquo;age&rdquo;.
              </>
            ) : (
              <>No {activeSurface.label.toLowerCase()} in the Trust Graph yet.</>
            )}
          </div>
        ) : null}

        {hits.map((hit) => (
          <div key={`${hit.type}:${hit.id}`} className="animate-arrive">
            <HitCard hit={hit} appUrl={appUrl} />
          </div>
        ))}

        {page?.cursor ? (
          <div className="px-4 py-3">
            <button
              type="button"
              onClick={loadMore}
              disabled={loadingMore}
              className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-ink disabled:opacity-60"
            >
              {loadingMore ? (
                <FontAwesomeIcon icon={faSpinner} spin className="h-3 w-3" />
              ) : null}
              load more
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
