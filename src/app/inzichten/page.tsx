import { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { Section } from "@/components/ui/section";
import { articles } from "@/content/articles";
import { ArticleCard } from "@/components/sections/article-card";

export const metadata: Metadata = {
  title: "Inzichten",
  description: "Artikelen en inzichten over interim management, implementatie en klantgerichte procesverbetering.",
  alternates: { canonical: "/inzichten" }
};

export default function InzichtenPage() {
  return (
    <>
      <PageHero title="Inzichten" subtitle="Praktische observaties uit verandertrajecten, leiderschap en operationele verbetering." />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>
    </>
  );
}
