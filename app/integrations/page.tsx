import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStamp,
  faMagnifyingGlass,
  faShieldHalved,
  faArrowUpRightFromSquare,
  faPlug,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section, SectionHeading } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Third-party software integrated with Verana. Live today: the MOSIP Inji suite, issuing and verifying national-ID credentials through the Verana trust layer.",
};

export default function Integrations() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Software integrated with Verana"
        intro="Verana is standards-based (DIDs, verifiable credentials, DIDComm, OpenID4VC), so existing identity software integrates instead of being replaced. The integrations below are done and running."
      />

      <Section>
        <Container className="space-y-10">
          {/* MOSIP Inji suite */}
          <article className="card reveal overflow-hidden">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-5 py-3.5">
              {/* official MOSIP logo (black wordmark) on a light chip so it
                  reads in both themes */}
              <span className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mosip-logo.png"
                  alt="MOSIP"
                  className="h-6 w-auto"
                />
              </span>
              <h2 className="display text-xl text-ink sm:text-2xl">
                MOSIP · Inji suite
              </h2>
              <span className="chip chip-verified ml-auto">
                <FontAwesomeIcon icon={faShieldHalved} className="h-3 w-3" />
                live on testnet
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <p className="max-w-3xl text-muted">
                MOSIP, the open-source platform behind national-ID programs,
                integrates with Verana through its Inji suite: a foundational
                Resident ID pilot where the credentials are issued and
                verified through the Verana trust layer, under the MOSIP
                Pilot Authority ecosystem.
              </p>

              <div className="reveal-stagger mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-rule bg-surface-2 p-5">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faStamp} className="h-4 w-4 text-accent" />
                    <h3 className="font-semibold text-ink">Inji Certify</h3>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-muted">
                      issuer
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Issues the Resident ID credential as a Verifiable Service:
                    its DID resolves TRUSTED against the public registry, with
                    ECS-Service and ECS-Organization credentials.
                  </p>
                </div>
                <div className="rounded-xl border border-rule bg-surface-2 p-5">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4 text-accent" />
                    <h3 className="font-semibold text-ink">Inji Verify</h3>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-muted">
                      verifier
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted">
                    Verifies Resident ID credentials, itself verifiable the
                    same way: a trusted Verifiable Service under the MOSIP
                    Pilot Authority.
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted">
                Both services appear in the{" "}
                <Link href="/identity" className="text-accent hover:underline">
                  Resolve-a-DID demo
                </Link>{" "}
                on this site; resolve them to see their live Proof-of-Trust.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule px-5 py-3">
              <a
                href="https://playground.mosip.testnet.verana.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
              >
                Try the MOSIP playground
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" />
              </a>
              <span className="font-mono text-[11px] text-muted">
                playground.mosip.testnet.verana.network
              </span>
            </div>
          </article>

          {/* integrate yours */}
          <div className="card reveal flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
            <FontAwesomeIcon icon={faPlug} className="h-5 w-5 shrink-0 text-accent" />
            <div className="flex-1">
              <h2 className="font-semibold text-ink">Integrate your stack</h2>
              <p className="mt-1 text-sm text-muted">
                Building on OpenID4VC, DIDComm, or an existing credential
                platform? Verana adds the trust layer without replacing what
                you run.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 text-sm text-accent hover:underline"
            >
              Talk to us
              <FontAwesomeIcon icon={faArrowRightLong} className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
