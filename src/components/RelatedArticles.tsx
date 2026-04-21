import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getOtherArticles } from "@/content/articles";
import { Container } from "./Container";

export function RelatedArticles({ currentSlug }: { currentSlug: string }) {
  const others = getOtherArticles(currentSlug);
  return (
    <section className="mt-24 border-t border-bark/10 bg-paper-soft py-16">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-red">
          Keep reading
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-bark">
          More on Turkish apples
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/${a.slug}`}
                className="group flex h-full flex-col justify-between rounded-card border border-bark/10 bg-cream p-6 transition-colors hover:border-apple-red/40"
              >
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-apple-red">
                    {a.eyebrow}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-bark">
                    {a.title}
                  </h3>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-apple-red">
                  Read
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
