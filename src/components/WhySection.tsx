import { Boxes, Layers, ShieldCheck, Truck } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const points = [
  {
    icon: Layers,
    title: "Category depth",
    body: "Red, Gala, Fuji, Golden, Granny Smith — five commercial lines in one origin, covering wholesale and retail needs.",
  },
  {
    icon: ShieldCheck,
    title: "Graded, not guessed",
    body: "Calibre, colour, firmness and skin condition turn Turkish apples into specification-driven fruit, not just bulk.",
  },
  {
    icon: Boxes,
    title: "Export-ready packaging",
    body: "13 kg export cartons, tray packs and bushel-style 18 kg cartons — formats chosen for the market, not the orchard.",
  },
  {
    icon: Truck,
    title: "Cold chain through",
    body: "From post-harvest cooling to reefer containers, temperature integrity is part of how Turkish apples travel.",
  },
];

export function WhySection() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Turkish apples"
          title="Scale, structure and commercial relevance."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-card border border-bark/10 bg-cream p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-apple-red/10 text-apple-red">
                <p.icon size={20} />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-bark">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bark-soft">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
