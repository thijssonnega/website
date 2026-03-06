import { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { expertiseThemes, sectors } from "@/content/expertise";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Verdieping op thema's zoals credit management, outsourcing, digitalisering en performance governance.",
  alternates: { canonical: "/expertise" }
};

export default function ExpertisePage() {
  return (
    <>
      <PageHero title="Expertise" subtitle="Inhoudelijke diepgang op thema's waar strategie, operatie en klantbelang elkaar raken." />
      <Section title="Thema's">
        <div className="grid gap-4 md:grid-cols-2">
          {expertiseThemes.map((theme) => (
            <article key={theme.title} className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-xl font-semibold text-primary">{theme.title}</h2>
              <p className="mt-2 text-sm text-foreground/80">{theme.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section title="Sectoren en contexten">
        <ul className="grid gap-3 md:grid-cols-2">
          {sectors.map((sector) => (
            <li key={sector} className="rounded-lg border border-border bg-card p-4 text-sm text-foreground/85">
              {sector}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
