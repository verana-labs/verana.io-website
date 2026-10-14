import { NextRequest, NextResponse } from "next/server";
import {
  resolveDid,
  resolveServiceHost,
  NETWORK_NAME,
  type ResolvePayload,
} from "../../lib/verana";
import { DEMO_SERVICES } from "../../lib/content";

// Proxies the indexer's trust resolution for the Resolve-a-DID widget
// (spec-v2 §2.3). The browser never talks to the upstream directly.
//   ?did=did:...      resolve that DID
//   ?service=<key>    resolve a demo service (DEMO_SERVICES) by its host
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const serviceKey = params.get("service");
  const service = serviceKey
    ? DEMO_SERVICES.find((s) => s.key === serviceKey)
    : undefined;
  const host =
    service && "host" in service
      ? service.host.replaceAll("{network}", NETWORK_NAME)
      : null;
  const did =
    service && "did" in service
      ? service.did
      : host
        ? `did:web:${host}`
        : (params.get("did")?.trim() ?? "");

  if ((serviceKey && !service) || !did.startsWith("did:") || did.length > 512) {
    return NextResponse.json(
      { error: "invalid_did", message: "Provide a valid DID (did:...)." },
      { status: 400 }
    );
  }

  try {
    // Always resolve live: a stale cached result must never mask a new
    // registration or evaluation (the indexer evaluates trust itself).
    const result = host
      ? await resolveServiceHost(host, { fresh: true })
      : await resolveDid(did, 30_000, { fresh: true });
    const payload: ResolvePayload = result
      ? { found: true, network: NETWORK_NAME, ...result }
      : { found: false, network: NETWORK_NAME, did };
    return NextResponse.json(payload, {
      headers: {
        // Only a positive verdict is briefly cacheable by the browser;
        // negative verdicts must re-check so recoveries show immediately.
        "Cache-Control":
          result?.trusted ? "public, max-age=60" : "no-store",
      },
    });
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
