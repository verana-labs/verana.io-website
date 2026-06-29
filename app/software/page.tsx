import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import { SOFTWARE } from "../lib/content";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Software",
  description:
    "The open-source software of the public infrastructure: run-it-yourself reference implementations and SDKs you host anywhere.",
};

const WORKS_WITH = [
  { name: "MOSIP, Inji suite", note: "wallet, issuer, verifier, for national-ID programs already on MOSIP" },
  { name: "EU Digital Identity (EUDI) Wallet", note: "issue and verify against EUDIW flows" },
  { name: "credo-ts", note: "OpenWallet Foundation / Aries, add Verana trust to existing agents" },
  { name: "Any OID4VC or TRQP-conformant wallet, issuer, or verifier", note: "" },
];

export default function SoftwarePage() {
  return (
    <>
      <PageHero
        eyebrow="Software"
        title="Open-source software you run yourself"
        intro="The open-source software of the public infrastructure: run-it-yourself reference implementations and SDKs (Apache 2.0) you host anywhere, your cloud, on-prem, or your own jurisdiction. Each maps to a module on github.com/verana-labs."
      />

      <Section>
        <Container className="space-y-6">
          {SOFTWARE.map((s) => (
            <div key={s.name} className="card p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="display text-xl text-ink">{s.name}</h2>
                <span className="font-mono text-xs text-muted">{s.module}</span>
              </div>
              <p className="mt-3 text-muted">{s.what}</p>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-muted">
                <span>
                  <span className="text-ink">interfaces:</span> {s.interfaces}
                </span>
                <span>
                  <span className="text-ink">speaks:</span> {s.speaks}
                </span>
              </div>
            </div>
          ))}

          <p className="pt-4 text-sm text-muted">
            All open source, Apache-2.0, on{" "}
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              github.com/verana-labs
            </a>
            .
          </p>
        </Container>
      </Section>

      <Section className="border-t border-rule bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Works with"
            title="Compatible third-party software"
            intro="Verana is standards-based (VC, DID, DIDComm, OID4VC/OID4VP, EUDIW, TRQP), so it interoperates with the wider identity ecosystem instead of replacing it. Keep your existing stack."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {WORKS_WITH.map((w) => (
              <div key={w.name} className="card p-5">
                <p className="font-medium text-ink">{w.name}</p>
                {w.note ? <p className="mt-1 text-sm text-muted">{w.note}</p> : null}
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">
            Interoperability via open standards. A listing is not an endorsement
            or certification, and is distinct from the Integrators directory
            (companies offering services).
          </p>
          <div className="mt-8">
            <Button href="/build">Start building</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
