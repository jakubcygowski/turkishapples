import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const varieties = [
  {
    name: "Red Apples",
    blurb:
      "The backbone of Turkish apple exports. Red Delicious types traded on colour, appearance and calibre.",
    color: "#B33A3A",
    bg: "#F4D4D4",
  },
  {
    name: "Gala",
    blurb:
      "A modern, retail-friendly profile with attractive shape and approachable sweetness.",
    color: "#D15A3B",
    bg: "#F7DBCC",
  },
  {
    name: "Fuji",
    blurb:
      "Sweeter and more premium-leaning — strong eating quality and a consumer-oriented image.",
    color: "#C94A56",
    bg: "#F5D6DA",
  },
  {
    name: "Golden",
    blurb:
      "The classic yellow apple. Versatile across wholesale, retail and food service programs.",
    color: "#D6A43A",
    bg: "#F4E3BE",
  },
  {
    name: "Granny Smith",
    blurb:
      "Firm green apples with fresh acidity — the contrast line in any mixed-variety program.",
    color: "#6E9B3A",
    bg: "#E1ECCC",
  },
];

export function VarietiesShowcase() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The varieties"
            title="Five apples, one origin."
            description="The core of every Turkish apple export program — each variety serves a different commercial purpose."
          />
          <Link
            href="/turkish-apple-varieties"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-apple-red transition-colors hover:text-apple-red-dark"
          >
            Read the varieties guide
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {varieties.map((v) => (
            <div
              key={v.name}
              className="group flex flex-col gap-5 rounded-card border border-bark/10 bg-cream p-6 transition-colors hover:border-apple-red/40"
            >
              <div
                aria-hidden
                className="flex h-24 w-24 items-center justify-center rounded-full"
                style={{ backgroundColor: v.bg }}
              >
                <svg width="56" height="56" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M20 10.5c1.6-3.5 4.3-5.4 7.2-5.6-.2 2.9-2 5.4-5 6.5"
                    stroke="#4F7A3A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M28 12.5c3.8 0 7 3.4 7 8.4 0 6.8-4.5 14.1-9 14.1-1.7 0-3-0.8-6-0.8s-4.3 0.8-6 0.8c-4.5 0-9-7.3-9-14.1 0-5 3.2-8.4 7-8.4 2.6 0 4 1.2 8 1.2s5.4-1.2 8-1.2Z"
                    fill={v.color}
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-bark">
                  {v.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bark-soft">
                  {v.blurb}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
