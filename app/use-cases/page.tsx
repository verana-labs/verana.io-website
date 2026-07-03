import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faBuilding,
  faMicrochip,
  faRobot,
  faUsers,
  faTriangleExclamation,
  faCircleCheck,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section } from "../components/ui";
import PageHero from "../components/PageHero";
import { USE_CASES } from "../lib/content";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "One trust infrastructure, many entry points: governments, enterprise and human credentials, connected objects (IoT), and agentic AI, told as concrete stories.",
};

const ICONS = [faLandmark, faBuilding, faMicrochip, faRobot];

export default function UseCases() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="One trust infrastructure, many entry points"
        intro="Overlapping lenses, not silos. Companies recognize themselves in one or several; a bank doing reusable KYC today runs AI agents tomorrow. Each lens below is a concrete story, told through the same actors as the worked examples."
      />

      <Section>
        <Container className="space-y-10">
          {USE_CASES.map((u, i) => (
            <article key={u.name} className="card reveal p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <FontAwesomeIcon
                  icon={ICONS[i]}
                  className="h-5 w-5 text-primary"
                />
                <h2 className="display text-2xl text-ink">{u.name}</h2>
              </div>

              <p className="mt-4 flex items-start gap-2 text-sm text-muted">
                <FontAwesomeIcon
                  icon={faUsers}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0"
                />
                {u.actors}
              </p>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
                <div className="rounded-xl border border-rule bg-surface-2 p-5">
                  <span className="eyebrow flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      className="h-3 w-3"
                    />
                    Today
                  </span>
                  <p className="mt-2 text-sm text-muted">{u.pain}</p>
                </div>
                <div>
                  <span className="eyebrow flex items-center gap-2">
                    <FontAwesomeIcon icon={faCircleCheck} className="h-3 w-3" />
                    On Verana
                  </span>
                  <ol className="mt-2 space-y-2">
                    {u.story.map((s, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted">
                        <span className="font-mono text-xs text-accent">
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 border-t border-rule pt-4">
                {u.mechanics.map((m) => (
                  <Link
                    key={m.href + m.label}
                    href={m.href}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    {m.label}
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className="h-3.5 w-3.5"
                    />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </Container>
      </Section>

      <Section className="border-t border-rule bg-surface">
        <Container className="text-center">
          <p className="display reveal mx-auto max-w-3xl text-2xl sm:text-3xl text-ink">
            Whatever you need to trust, a person, an organization, a service, a
            device, or an AI agent, is verified the same way.
          </p>
        </Container>
      </Section>
    </>
  );
}
