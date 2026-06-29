import { Container } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="grid-mesh border-b border-rule">
      <Container className="py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-4 max-w-3xl text-3xl sm:text-5xl text-ink">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-lg text-muted leading-relaxed">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
