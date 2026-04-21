import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const regions = [
  {
    name: "Isparta",
    note: "Roses and apples. Cool highland orchards and a long commercial tradition in fresh-fruit packing.",
  },
  {
    name: "Karaman",
    note: "Central Anatolia’s dry, sunny plateau — extensive modern orchards and major cold-storage capacity.",
  },
  {
    name: "Niğde",
    note: "High-altitude orchards under the shadow of volcanic peaks, known for colour and firmness.",
  },
];

export function RegionsStrip() {
  return (
    <section className="bg-paper-soft py-24">
      <Container>
        <SectionHeading
          eyebrow="The regions"
          title="Three provinces do most of the work."
          description="The backbone of Turkish apple supply — orchards, packing houses and cold storage, all within a few hours’ drive of each other."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {regions.map((r) => (
            <div
              key={r.name}
              className="group relative flex flex-col gap-4 rounded-card border border-bark/10 bg-cream p-7 transition-colors hover:border-apple-red/40"
            >
              <h3 className="font-display text-3xl font-semibold tracking-tight text-bark">
                {r.name}
              </h3>
              <p className="text-sm leading-relaxed text-bark-soft">{r.note}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
