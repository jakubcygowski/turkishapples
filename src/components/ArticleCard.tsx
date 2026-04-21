import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/content/articles";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-card border border-bark/10 bg-cream p-7 transition-all hover:-translate-y-0.5 hover:border-apple-red/40 hover:shadow-[0_18px_40px_-20px_rgba(58,42,31,0.25)]"
    >
      <div>
        <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-apple-red">
          {article.eyebrow}
        </span>
        <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-tight text-bark">
          {article.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-bark-soft">
          {article.shortDescription}
        </p>
      </div>

      <div className="mt-6 text-sm font-medium text-bark">
        <span className="inline-flex items-center gap-1.5 text-apple-red transition-colors group-hover:text-apple-red-dark">
          Read article
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-sun/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
      />
    </Link>
  );
}
