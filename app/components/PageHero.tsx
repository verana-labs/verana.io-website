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
    <section className="hero-glow border-b border-rule">
      <Container className="py-16 sm:py-20">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="display reveal mt-4 max-w-3xl text-4xl sm:text-6xl text-ink">
          {title}
        </h1>
        {intro ? (
          <p className="reveal mt-5 max-w-2xl text-lg text-muted leading-relaxed">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
