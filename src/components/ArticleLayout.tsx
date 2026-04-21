import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { Article } from "@/content/articles";
import { Container } from "./Container";
import { RelatedArticles } from "./RelatedArticles";

export function ArticleLayout({ article }: { article: Article }) {
  return (
    <article>
      <header className="bg-paper pb-16 pt-12 sm:pt-16">
        <Container>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-bark-soft"
          >
            <Link href="/" className="transition-colors hover:text-apple-red">
              Home
            </Link>
            <ChevronRight size={12} className="opacity-60" />
            <span className="text-bark/80">{article.title}</span>
          </nav>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-apple-red">
            {article.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-bark sm:text-5xl md:text-6xl">
            {article.title}
          </h1>

          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-bark-soft">
            {article.lead.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Container>
      </header>

      {article.heroImage && (
        <Container className="-mt-8">
          <figure className="overflow-hidden rounded-card border border-bark/10 bg-cream">
            <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
              <Image
                src={article.heroImage.src}
                alt={article.heroImage.alt}
                fill
                priority
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            {article.heroImage.caption && (
              <figcaption className="border-t border-bark/10 bg-paper-soft px-6 py-4 text-sm italic text-bark-soft">
                {article.heroImage.caption}
              </figcaption>
            )}
          </figure>
        </Container>
      )}

      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_280px]">
        <div className="prose-orchard max-w-3xl">
          {article.sections.map((section, idx) => (
            <section key={idx}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>

        <aside className="lg:pt-2">
          <div className="sticky top-24 rounded-card border border-bark/10 bg-paper-soft p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-apple-red">
              Key points
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-bark">
              {article.keyPoints.map((point, i) => (
                <li key={i} className="flex gap-2.5">
                  <span
                    aria-hidden
                    className="mt-[0.55rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-apple-red"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>

      <RelatedArticles currentSlug={article.slug} />
    </article>
  );
}
