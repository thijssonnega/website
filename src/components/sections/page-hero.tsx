import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type PageHeroProps = {
  title: string;
  subtitle: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function PageHero({ title, subtitle, primaryCta, secondaryCta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-[radial-gradient(circle_at_20%_20%,rgba(180,145,103,.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(31,53,82,.2),transparent_35%)] py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-foreground/80">CaSon Management & Advies</p>
          <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{title}</h1>
          <p className="mt-5 text-lg text-foreground/80">{subtitle}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryCta && <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>}
              {secondaryCta && (
                <ButtonLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ButtonLink>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
