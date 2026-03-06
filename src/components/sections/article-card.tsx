import Link from "next/link";
import { CalendarDays, Clock3 } from "lucide-react";
import { Article } from "@/content/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="rounded-xl border border-border bg-card p-6 shadow-soft">
      <p className="mb-3 flex items-center gap-4 text-xs text-foreground/70">
        <span className="inline-flex items-center gap-1"><CalendarDays size={14} /> {article.publishedAt}</span>
        <span className="inline-flex items-center gap-1"><Clock3 size={14} /> {article.readTime}</span>
      </p>
      <h3 className="text-xl font-semibold text-primary">
        <Link href={`/inzichten/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-foreground/80">{article.description}</p>
      <Link className="mt-4 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline" href={`/inzichten/${article.slug}`}>
        Lees artikel
      </Link>
    </article>
  );
}
