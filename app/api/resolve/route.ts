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
    // Always hit the resolver live: a stale cached UNTRUSTED must never mask
    // a fixed/refreshed resolver (the upstream caches evaluations itself).
    const result = await resolveDid(did, "full", 30_000, { fresh: true });
    // Best-effort extras from the DID documents (logos, credential URLs).
    const enrichment = await getPotEnrichment(result).catch(() => ({}));
    return NextResponse.json(
      { ...result, enrichment },
      {
        headers: {
          // Only a positive verdict is briefly cacheable by the browser;
          // negative verdicts must re-check so recoveries show immediately.
          "Cache-Control":
            result.trustStatus === "TRUSTED"
              ? "public, max-age=60"
              : "no-store",
        },
      }
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
