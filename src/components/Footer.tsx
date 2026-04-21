import Link from "next/link";
import { AppleMark } from "./AppleMark";
import { Container } from "./Container";
import { articles } from "@/content/articles";

export function Footer() {
  return (
    <footer className="border-t border-bark/10 bg-paper-soft">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-bark">
              <span className="text-apple-red">
                <AppleMark size={26} />
              </span>
              <span className="font-display text-lg font-semibold">
                Turkish Apples
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bark-soft">
              A story of an export category grown in Anatolia. Informational
              resource on Turkish apple varieties, quality, export, price and
              suppliers.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-bark/70">
              Articles
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/${a.slug}`}
                    className="text-bark/80 transition-colors hover:text-apple-red"
                  >
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-bark/70">
              Regions
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-bark/80">
              <li>Isparta</li>
              <li>Karaman</li>
              <li>Niğde</li>
            </ul>

            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-wider text-bark/70">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-bark/80 transition-colors hover:text-apple-red"
                >
                  Contact form
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@turkishapples.com"
                  className="text-bark/80 transition-colors hover:text-apple-red"
                >
                  contact@turkishapples.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-bark/10 pt-6 text-xs text-bark-soft">
          <p>© {new Date().getFullYear()} turkishapples.com — informational site.</p>
        </div>
      </Container>
    </footer>
  );
}
