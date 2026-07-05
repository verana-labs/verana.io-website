import { buildMetadata } from "../lib/seo";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata = buildMetadata({
  title: "Brand",
  description:
    "Verana brand assets: logo, color tokens (light and dark), typography, and the press kit.",
  path: "/brand",
});

const SWATCHES: { name: string; role: string; hex: string }[] = [
  { name: "Verana Purple", role: "Primary", hex: "#763EF0" },
  { name: "Electric Blue", role: "Accent", hex: "#2E6BE6" },
  { name: "Signal Green", role: "Verified / success", hex: "#29C68C" },
  { name: "Ink Black", role: "Dark background", hex: "#0B0B12" },
  { name: "Graphite", role: "Dark surface", hex: "#151824" },
  { name: "White", role: "Light background", hex: "#FFFFFF" },
];

export default function Brand() {
  return (
    <>
      <PageHero
        eyebrow="Brand"
        title="Verana brand"
        intro="The Protocol Grid identity: Verana purple, Electric Blue accent, Signal Green for verified states, Space Grotesk display, Inter body, IBM Plex Mono. Full light and dark."
      />
      <Section>
        <Container className="space-y-12">
          <div>
            <SectionHeading eyebrow="Logo" title="The bull-horn V" />
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div className="card flex h-32 w-48 items-center justify-center">
                <img src="/logo.svg" alt="Verana logo" className="h-10" />
              </div>
              <Button href="/verana-press-kit.zip" variant="ghost" external>
                Download press kit
              </Button>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Color" title="Tokens" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SWATCHES.map((s) => (
                <div key={s.name} className="card overflow-hidden">
                  <div className="h-20 w-full" style={{ background: s.hex }} />
                  <div className="p-4">
                    <p className="font-medium text-ink">{s.name}</p>
                    <p className="text-sm text-muted">{s.role}</p>
                    <p className="mt-1 font-mono text-xs text-muted">{s.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Typography" title="Three typefaces" />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="card p-6">
                <p className="display text-3xl text-ink">Aa</p>
                <p className="mt-3 font-medium text-ink">Space Grotesk</p>
                <p className="text-sm text-muted">Display, headings</p>
              </div>
              <div className="card p-6">
                <p className="text-3xl font-semibold text-ink">Aa</p>
                <p className="mt-3 font-medium text-ink">Inter</p>
                <p className="text-sm text-muted">Body, UI</p>
              </div>
              <div className="card p-6">
                <p className="font-mono text-3xl text-ink">Aa</p>
                <p className="mt-3 font-medium text-ink">IBM Plex Mono</p>
                <p className="text-sm text-muted">Code, tags, status</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
