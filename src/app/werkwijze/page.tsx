import { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Werkwijze",
  description: "Een senior en praktische aanpak voor analyse, implementatie en borging van verbeteringen.",
  alternates: { canonical: "/werkwijze" }
};

const steps = [
  {
    title: "Snel scherp krijgen wat speelt",
    text: "In korte tijd een feitelijk beeld van prestaties, knelpunten, risico's en afhankelijkheden."
  },
  {
    title: "Heldere prioriteiten en bestuurlijke rust creëren",
    text: "Samen focus aanbrengen op keuzes die direct effect hebben op continuïteit en resultaat."
  },
  {
    title: "Teams meenemen en eigenaarschap organiseren",
    text: "Leidinggevenden en teams verbinden rond duidelijke rollen, ritme en haalbare doelen."
  },
  {
    title: "Resultaat realiseren in operatie én structuur",
    text: "Verbeteringen doorvoeren in processen, aansturing en samenwerking met zichtbare voortgang."
  },
  {
    title: "Borgen en doorontwikkelen",
    text: "Nieuwe werkwijzen vastleggen, prestaties monitoren en vervolgverbeteringen gericht inzetten."
  }
];

export default function WerkwijzePage() {
  return (
    <>
      <PageHero title="Werkwijze" subtitle="Pragmatisch, transparant en gericht op concrete resultaten die blijven werken." />
      <Section>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground/80">Stap {index + 1}</p>
              <h2 className="mt-2 text-2xl font-semibold text-primary">{step.title}</h2>
              <p className="mt-2 text-foreground/80">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
