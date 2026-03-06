import { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Over Casper",
  description: "Lees meer over Casper Sonnega en zijn aanpak als managementadviseur en interim manager.",
  alternates: { canonical: "/over-casper" }
};

export default function OverCasperPage() {
  return (
    <>
      <PageHero title="Over Casper Sonnega" subtitle="Senior adviseur en interim manager met focus op bestuurlijke rust, operationele verbetering en duurzame verandering." />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-xl border border-dashed border-border bg-card p-6 text-sm text-foreground/70">
            Professionele foto-placeholder<br />
            [NOG TE BEVESTIGEN] Voeg hier zakelijk portret toe.
          </div>
          <div className="space-y-4 text-foreground/80">
            <p>
              Casper Sonnega ondersteunt organisaties die behoefte hebben aan senioriteit op momenten dat complexiteit toeneemt en snelheid nodig is. Zijn stijl is nuchter, analytisch en
              tegelijk mensgericht: helder in richting, zorgvuldig in samenwerking.
            </p>
            <p>
              Hij werkt op het snijvlak van strategie en operatie. Daarmee helpt hij directies en managementteams om niet alleen goede keuzes te maken, maar deze ook daadwerkelijk in de
              organisatie te laten landen.
            </p>
            <p>
              [NOG TE BEVESTIGEN] Concrete loopbaangegevens, functietitels en jaartallen kunnen hier later worden toegevoegd zodra deze definitief zijn afgestemd.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Waar Casper waarde toevoegt">
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Leiderschap in perioden van verandering of onzekerheid",
            "Complexe verbetertrajecten die vragen om uitvoeringskracht",
            "Verbinden van bestuurlijke keuzes met operationele realiteit",
            "Verbeteren van samenwerking in ketens en tussen teams"
          ].map((item) => (
            <li key={item} className="rounded-lg border border-border bg-card p-4 text-sm text-foreground/85">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Wat opdrachtgevers mogen verwachten">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Snelle oriëntatie en scherpe diagnose",
            "Heldere communicatie zonder ruis",
            "Afspraken die zichtbaar resultaat opleveren"
          ].map((point) => (
            <article key={point} className="rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold text-primary">{point}</h3>
            </article>
          ))}
        </div>
        <ButtonLink href="/contact" className="mt-8">
          Plan een kennismaking
        </ButtonLink>
      </Section>
    </>
  );
}
