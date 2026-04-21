import { articles } from "@/content/articles";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { ArticleCard } from "./ArticleCard";

export function ArticlesGrid() {
  return (
    <section className="bg-paper py-24">
      <Container>
        <SectionHeading
          eyebrow="The six articles"
          title="One fruit, told in six parts."
          description="Each article is a self-contained read — start with Origin or jump straight to Suppliers."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </Container>
    </section>
  );
}
