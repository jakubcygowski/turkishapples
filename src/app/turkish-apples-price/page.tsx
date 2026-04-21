import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleLayout } from "@/components/ArticleLayout";
import { getArticle } from "@/content/articles";

const slug = "turkish-apples-price";

export function generateMetadata(): Metadata {
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/${slug}`,
    },
  };
}

export default function Page() {
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleLayout article={article} />;
}
