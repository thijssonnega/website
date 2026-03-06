import Link from "next/link";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
      <Container className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold">{siteConfig.name}</h2>
          <p className="mt-2 max-w-md text-sm text-primary-foreground/80">{siteConfig.tagline}</p>
        </div>
        <div className="space-y-1 text-sm">
          <p>{siteConfig.personName}</p>
          <p>{siteConfig.contact.email}</p>
          <p>{siteConfig.contact.phone}</p>
          <p>{siteConfig.contact.location}</p>
          <Link className="inline-block pt-1 underline decoration-primary-foreground/40 underline-offset-4" href="/contact">
            Neem contact op
          </Link>
        </div>
      </Container>
    </footer>
  );
}
