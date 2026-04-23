import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Mail, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/components/ContactSection";
import { TurkishFlag } from "@/components/TurkishFlag";

export const metadata: Metadata = {
  title: "Contact — Turkish Apples",
  description:
    "Contact a Turkish apple specialist. Send your specification — variety, calibre, packaging and destination market — and get a concrete commercial answer.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
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
            <span className="text-bark/80">Contact</span>
          </nav>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-apple-red">
            Contact
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-bark sm:text-5xl md:text-6xl">
            Get in touch with a Turkish apple specialist
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bark-soft">
            Whether you need variety guidance, a concrete offer, an export plan
            or a supplier introduction — tell us what you need and we will come
            back with a practical, commercial answer.
          </p>
        </Container>
      </header>

      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_1.2fr]">
        <aside className="space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold text-bark">
              Direct contact
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-bark-soft">
              Prefer email? Write to us directly and we will reply from the same address.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-bark/15 bg-cream px-4 py-2 text-sm font-medium text-bark transition-colors hover:border-apple-red hover:text-apple-red"
            >
              <Mail size={16} />
              {CONTACT_EMAIL}
            </a>
          </div>

          <dl className="space-y-5 text-sm">
            <div className="flex gap-3">
              <Clock size={18} className="mt-0.5 flex-shrink-0 text-apple-red" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-bark/70">
                  Response time
                </dt>
                <dd className="mt-1 text-bark-soft">
                  Typically within one business day.
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin size={18} className="mt-0.5 flex-shrink-0 text-apple-red" />
              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-bark/70">
                  <TurkishFlag width={16} height={11} />
                  Sourcing regions
                </dt>
                <dd className="mt-1 text-bark-soft">
                  Isparta · Karaman · Niğde and other Turkish apple provinces.
                </dd>
              </div>
            </div>
          </dl>

          <div className="rounded-card border border-bark/10 bg-paper-soft p-5 text-sm leading-relaxed text-bark-soft">
            <p>
              To get the fastest, most useful reply, please include:{" "}
              <strong className="text-bark">variety</strong>,{" "}
              <strong className="text-bark">calibre</strong>,{" "}
              <strong className="text-bark">packaging</strong>,{" "}
              <strong className="text-bark">destination market</strong> and{" "}
              <strong className="text-bark">target volume</strong>.
            </p>
          </div>
        </aside>

        <div className="rounded-card border border-bark/10 bg-cream p-6 shadow-sm sm:p-8">
          <ContactForm variant="full" submitLabel="Send inquiry" />
        </div>
      </Container>
    </>
  );
}
