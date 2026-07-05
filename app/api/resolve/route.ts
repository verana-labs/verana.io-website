import { NextRequest, NextResponse } from "next/server";
import { resolveDid, getPotEnrichment } from "../../lib/verana";

// Proxies the Verana resolver for the Resolve-a-DID widget (spec-v2 §2.3).
// The browser never talks to the upstream directly.
export async function GET(request: NextRequest) {
  const did = request.nextUrl.searchParams.get("did")?.trim() ?? "";

  if (!did.startsWith("did:") || did.length > 512) {
    return NextResponse.json(
      { error: "invalid_did", message: "Provide a valid DID (did:...)." },
      { status: 400 }
    );
  }

  try {
    const result = await resolveDid(did, "full");
    // Best-effort extras from the DID documents (logos, credential URLs).
    const enrichment = await getPotEnrichment(result).catch(() => ({}));
    return NextResponse.json(
      { ...result, enrichment },
      { headers: { "Cache-Control": "public, max-age=120" } }
    );
  } catch {
    return NextResponse.json(
      {
        error: "resolver_unreachable",
        message: "The trust resolver could not be reached. Try again shortly.",
      },
      { status: 502 }
    );
  }
}
