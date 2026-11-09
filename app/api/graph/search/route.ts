import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { GRAPH_SURFACES, searchGraph } from "../../../lib/graph";

// Proxies the Trust Graph search for the Query-the-Trust-Graph widget on
// /discovery. The browser never talks to the upstream directly, and the
// query shape is pinned here (surface, free text, one service-type filter,
// cursor) so the public site cannot be used as a generic graph client.

const Query = z.object({
  surface: z.enum(GRAPH_SURFACES).default("Did"),
  q: z.string().trim().max(200).default(""),
  type: z
    .string()
    .trim()
    .max(64)
    .regex(/^[A-Za-z0-9_-]*$/)
    .default(""),
  cursor: z.string().max(2000).default(""),
});

export async function GET(request: NextRequest) {
  const parsed = Query.safeParse(
    Object.fromEntries(request.nextUrl.searchParams.entries())
  );
  if (!parsed.success) {
    return NextResponse.json(
      { error: "invalid_query", message: "Invalid search parameters." },
      { status: 400 }
    );
  }
  const { surface, q, type, cursor } = parsed.data;

  try {
    const result = await searchGraph({
      surface,
      freeText: q,
      serviceType: type || undefined,
      cursor: cursor || undefined,
      limit: 10,
    });
    return NextResponse.json(result, {
      headers: { "Cache-Control": "public, max-age=30" },
    });
  } catch {
    return NextResponse.json(
      {
        error: "graph_unreachable",
        message: "The Trust Graph could not be reached. Try again shortly.",
      },
      { status: 502 }
    );
  }
}
