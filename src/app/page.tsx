import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { trustPoints, siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { expertiseThemes } from "@/content/expertise";
import { articles } from "@/content/articles";
import { ServiceCard } from "@/components/sections/service-card";
import { ArticleCard } from "@/components/sections/article-card";
import { ButtonLink } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function HomePage() {
  return (
    <>
      <PageHero
        title={siteConfig.hero.title}
        subtitle={siteConfig.hero.subtitle}
        primaryCta={{ label: siteConfig.ctas.primary, href: "/contact" }}
        secondaryCta={{ label: siteConfig.ctas.secondary, href: "/expertise" }}
      />

      <Section title="Vertrouwen door ervaring en executiekracht">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point) => (
            <li key={point} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-primary">
              {point}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Diensten" subtitle="Praktische ondersteuning voor organisaties die snelheid, richting en resultaat nodig hebben.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <FadeIn key={service.slug}>
              <ServiceCard title={service.title} summary={service.summary} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section
        className="bg-muted/40"
        title="Waarom Casper Sonnega"
        subtitle="De combinatie van strategisch inzicht, operationele realisatie en mensgerichte verandering maakt trajecten effectief én houdbaar."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Strategische scherpte met realistische uitvoerbaarheid",
            "Ervaring met complexe ketens, governance en samenwerking",
            "Focus op meetbaar resultaat én duurzame verbetering",
            "Heldere communicatie die teams meeneemt in verandering"
          ].map((item) => (
            <p key={item} className="flex items-start gap-2 rounded-lg border border-border bg-card p-4 text-sm text-foreground/80">
              <CheckCircle2 className="mt-0.5 text-accent" size={18} /> {item}
            </p>
          ))}
        </div>
      </Section>

      <Section title="Werkwijze" subtitle="Een compacte aanpak die snelheid geeft zonder de kwaliteit van besluitvorming te verliezen.">
        <ol className="grid gap-4 md:grid-cols-5">
          {["Analyse", "Richting bepalen", "Implementeren", "Borgen", "Doorontwikkelen"].map((step, index) => (
            <li key={step} className="rounded-xl border border-border bg-card p-4">
              <p className="text-xs font-semibold text-accent-foreground/80">Stap {index + 1}</p>
              <h3 className="mt-2 font-semibold text-primary">{step}</h3>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Expertise en thema's" subtitle="Specifieke kennisgebieden waarin inhoud en realisatie samenkomen.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expertiseThemes.map((theme) => (
            <article key={theme.title} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-lg font-semibold text-primary">{theme.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">{theme.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Inzichten" subtitle="Korte artikelen over leiderschap, implementatie en operationele verbetering.">
        <div className="grid gap-4 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>

      <Section className="bg-primary" title="Klaar om voortgang te maken?" subtitle="Plan een kennismaking en bespreek waar uw organisatie nu de meeste impact kan realiseren.">
        <div className="flex flex-wrap items-center gap-3">
          <ButtonLink href="/contact" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Plan een kennismaking
          </ButtonLink>
          <ButtonLink href="/expertise" variant="secondary" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Bekijk expertise <ArrowRight className="ml-1" size={16} />
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
