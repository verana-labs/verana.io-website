// Server-side client for the Verana Trust Graph (verana-graph): the typed
// discovery index built from verified trust results. Called from the
// /api/graph/search route handler only, never from the browser.
//
// Endpoint verified against testnet (verana-graph v4-draft3):
//   POST {GRAPH_URL}/v4/graph/search  { surface, freeText, filters, snippet, limit, cursor }

export const GRAPH_URL =
  process.env.GRAPH_URL ?? "https://graph.testnet.verana.network";

/** The search surfaces exposed on the site (the API also has Corporation and ServiceEndpoint). */
export const GRAPH_SURFACES = ["Did", "Ecosystem", "CredentialSchema"] as const;
export type GraphSurface = (typeof GRAPH_SURFACES)[number];

/** Filter key of the declared service category on the Did surface ([TG-FCT-3]). */
export const SERVICE_TYPE_FACET = "EcsCredential.ServiceCredential.type";

export type GraphService = {
  pattern: "A" | "B";
  name: string;
  type: string;
  description: string;
  logoUri: string;
};

export type GraphOperator = {
  kind: "Organization" | "Persona";
  name: string;
  logoUri: string | null;
  countryCode: string;
  registryId: string | null;
  address: string | null;
};

export type GraphEndpoint = {
  id: string;
  type: string;
  serviceEndpoint: unknown;
};

export type GraphDidCard = {
  did: string;
  trusted: boolean;
  isTrustExpired: boolean;
  service: GraphService | null;
  operator: GraphOperator | null;
};

export type GraphDidHit = {
  type: "Did";
  id: string;
  score: number;
  snippet: {
    did: string;
    lastObservedAtTime: string;
    isTrustExpired: boolean;
    trusted: boolean;
    isCorporation: boolean;
    isEcosystem: boolean;
    service?: GraphService | null;
    operator?: GraphOperator | null;
    endpoints?: GraphEndpoint[];
  };
};

export type GraphEcosystemHit = {
  type: "Ecosystem";
  id: number;
  score: number;
  snippet: {
    id: number;
    did: string;
    archived: boolean;
    lastObservedAtTime: string;
    stats?: {
      participants: Record<string, number>;
      issuedCredentials: number;
      verifiedCredentials: number;
    };
    schemas?: { id: number; title: string; archived: boolean }[];
    didCard?: GraphDidCard;
  };
};

export type GraphSchemaHit = {
  type: "CredentialSchema";
  id: number;
  score: number;
  snippet: {
    id: number;
    archived: boolean;
    lastObservedAtTime: string;
    schema?: {
      type: string;
      digestSri: string;
      title: string;
      description: string;
    };
    ecosystem?: { id: number; archived: boolean };
  };
};

export type GraphHit = GraphDidHit | GraphEcosystemHit | GraphSchemaHit;

export type GraphFacet = { value: string | number | boolean; count: number }[];

export type GraphSearchResponse = {
  totalCount: number;
  hits: GraphHit[];
  facets: Record<string, GraphFacet>;
  cursor: string | null;
};

export type GraphSearchParams = {
  surface: GraphSurface;
  freeText?: string;
  /** Did surface only: restrict to one declared service category. */
  serviceType?: string;
  cursor?: string | null;
  limit?: number;
};

// The snippet groups each card needs ([TG-FCT-6c]); everything else is left out.
const SNIPPETS: Record<GraphSurface, Record<string, boolean>> = {
  Did: { service: true, operator: true, endpoints: true },
  Ecosystem: { stats: true, schemas: true, didCard: true },
  CredentialSchema: { schema: true, ecosystem: true },
};

/** Faceted search over the Trust Graph. Results are ranked by trust signals
 *  and lexical score; only trusted, non-expired DIDs pass the default gates. */
export async function searchGraph(
  params: GraphSearchParams
): Promise<GraphSearchResponse> {
  const body: Record<string, unknown> = {
    surface: params.surface,
    snippet: SNIPPETS[params.surface],
    limit: params.limit ?? 10,
  };
  const text = params.freeText?.trim();
  if (text) body.freeText = text;
  if (params.surface === "Did" && params.serviceType) {
    body.filters = { [SERVICE_TYPE_FACET]: params.serviceType };
  }
  if (params.cursor) body.cursor = params.cursor;

  const res = await fetch(`${GRAPH_URL}/v4/graph/search`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
    // The graph advances one block at a time; a minute of staleness is fine.
    next: { revalidate: 60 },
    signal: AbortSignal.timeout(15_000),
  });
  if (!res.ok) throw new Error(`graph search failed: ${res.status}`);
  return (await res.json()) as GraphSearchResponse;
}
