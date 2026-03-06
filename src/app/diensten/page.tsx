import { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { services } from "@/content/services";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Interim management, managementadvies en implementatiebegeleiding voor organisaties in beweging.",
  alternates: { canonical: "/diensten" }
};

export default function DienstenPage() {
  return (
    <>
      <PageHero
        title="Diensten"
        subtitle="Van interim leiderschap tot specialistisch advies: gericht op grip, tempo en duurzame prestatieverbetering."
        primaryCta={{ label: "Plan een kennismaking", href: "/contact" }}
      />
      <Section>
        <div className="space-y-8">
          {services.map((service) => (
            <article key={service.slug} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <h2 className="text-2xl font-semibold text-primary">{service.title}</h2>
              <p className="mt-2 text-foreground/80">{service.summary}</p>
              <div className="mt-5 grid gap-5 md:grid-cols-3">
                <div>
                  <h3 className="font-medium text-primary">Relevant bij</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                    {service.situations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-primary">Vraagstukken die worden opgelost</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                    {service.solutions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-primary">Verwachte opbrengst</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                    {service.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <ButtonLink href="/contact" className="mt-5">
                Bespreek deze dienst
              </ButtonLink>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
