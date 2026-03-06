import { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { Container } from "@/components/ui/container";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/inzichten/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt
    }
  };
}

export default function InzichtDetailPage({ params }: { params: { slug: string } }) {
  const article = articles.find((item) => item.slug === params.slug);
  if (!article) notFound();

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-sm text-foreground/70">{article.publishedAt} · {article.readTime}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-primary">{article.title}</h1>
        <p className="mt-4 text-lg text-foreground/80">{article.description}</p>
        <div className="prose mt-8 max-w-none">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </article>
  );
}
