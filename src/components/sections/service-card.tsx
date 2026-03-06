import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceCard({ title, summary }: { title: string; summary: string }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-0.5">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-foreground/80">{summary}</p>
      <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
        Bespreek uw vraagstuk <ArrowRight size={16} />
      </Link>
    </article>
  );
}
