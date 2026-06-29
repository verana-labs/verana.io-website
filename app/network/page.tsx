import type { Metadata } from "next";
import { Container, Section, SectionHeading, Chip, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Network status, roadmap, the VNA token utility, standards, and governance pointers for the live Verana network.",
};

const ROADMAP = [
  { when: "Now", what: "Testnet live" },
  { when: "Q1 2027", what: "Mainnet (target)" },
  { when: "Ongoing", what: "Trust Graph, ECS issuers, ecosystem onboarding" },
];

export default function Network() {
  return (
    <>
      <PageHero
        eyebrow="Network"
        title="A real, running network"
        intro="Production-grade proof the protocol is real: testnet today, mainnet targeted Q1 2027."
      />
      <Section>
        <Container className="space-y-12">
          <div>
            <SectionHeading eyebrow="Status & explorer" title="Network status" />
            <div className="mt-6 flex flex-wrap gap-3">
              <Chip verified>testnet: live</Chip>
              <Chip>mainnet: targeted Q1 2027</Chip>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Roadmap" title="Where it is going" />
            <ul className="mt-6 divide-y divide-rule overflow-hidden rounded-xl border border-rule">
              {ROADMAP.map((r) => (
                <li
                  key={r.when}
                  className="flex items-center gap-6 bg-surface px-5 py-4"
                >
                  <span className="w-28 shrink-0 font-mono text-xs uppercase tracking-wider text-muted">
                    {r.when}
                  </span>
                  <span className="text-sm text-ink">{r.what}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading
              eyebrow="Token"
              title="VNA, utility only"
            />
            <p className="mt-4 max-w-3xl text-muted">
              The VNA token pays network fees, funds trust deposits (a refundable,
              slashable stake behind participation), and underpins the ecosystem
              business model. Owned by no one. Nothing here is an offer,
              solicitation, or investment advice, and no price, returns, or
              emission schedule is shown.
            </p>
          </div>

          <div>
            <SectionHeading
              eyebrow="Standards & ecosystem"
              title="Open standards, real ecosystem"
            />
            <p className="mt-4 max-w-3xl text-muted">
              Verana speaks VC, DID, DIDComm, OID4VC/EUDIW, and TRQP, and engages
              ToIP, DIF, the OpenWallet Foundation, and IIW, with MOSIP and
              credo-ts interop.
            </p>
          </div>

          <div>
            <SectionHeading
              eyebrow="Governance & stewardship"
              title="Owned by no one"
            />
            <p className="mt-4 max-w-3xl text-muted">
              The network is governed and secured by the Verana Council. The
              specifications and open-source software are stewarded by the Verana
              Foundation. Verana is owned by no one.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={LINKS.council} variant="ghost" external>
                Verana Council
              </Button>
              <Button href={LINKS.foundation} variant="ghost" external>
                Verana Foundation
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
