import { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Plan een kennismaking met Casper Sonnega voor interim management of managementadvies.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Wilt u sparren over een verander- of verbeteropgave? Laat een bericht achter; u ontvangt doorgaans binnen [NOG TE BEVESTIGEN] 1 werkdag reactie."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-xl border border-border bg-card p-6 shadow-soft">
            <h2 className="text-2xl font-semibold text-primary">Plan een kennismaking</h2>
            <p className="mt-2 text-sm text-foreground/80">Beschrijf kort uw vraagstuk. Dan volgt een eerste verkenning van situatie, urgentie en gewenste ondersteuning.</p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
          <aside className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold text-primary">Contactgegevens</h2>
            <ul className="mt-4 space-y-2 text-sm text-foreground/80">
              <li>E-mail: {siteConfig.contact.email}</li>
              <li>Telefoon: {siteConfig.contact.phone}</li>
              <li>LinkedIn: {siteConfig.contact.linkedin}</li>
              <li>Vestigingsplaats: {siteConfig.contact.location}</li>
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
