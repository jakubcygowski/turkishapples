import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function StorySection() {
  return (
    <section className="py-24">
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            eyebrow="The story"
            title={
              <>
                From a mountain orchard to a <span className="italic">carton bound for the world.</span>
              </>
            }
          />
          <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-bark-soft">
            <p>
              High on the Anatolian plateau, where cool nights meet long sunny
              days, Turkish apples take their time. The trees stand on land
              that has grown fruit for generations — now tended with modern
              irrigation, hail nets and a careful eye on the harvest calendar.
            </p>
            <p>
              When the fruit is ready, it moves quickly. Cooling. Sorting.
              Grading by size, by colour, by the small signs that decide where
              each apple will go. Some will travel to a supermarket shelf in
              the Gulf. Some to a wholesale market in Delhi. Some to a boat
              leaving a Mediterranean port before morning.
            </p>
            <p>
              This site tells that story — the orchards, the varieties, the
              quality, the export, the price, the suppliers. Six articles,
              one fruit, one country.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-card border border-bark/10 bg-paper-soft p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-apple-red">
              By the numbers
            </p>
            <dl className="mt-6 space-y-6">
              <Stat label="Core export varieties" value="5" />
              <Stat label="Main apple provinces" value="3" />
              <Stat label="Common export pack sizes" value="13 / 18 kg" />
              <Stat label="Calibre range" value="60–80+ mm" />
            </dl>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-card bg-apple-red/10"
          />
        </div>
      </Container>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-bark/10 pb-4 last:border-0 last:pb-0">
      <dt className="text-sm text-bark-soft">{label}</dt>
      <dd className="font-display text-2xl font-semibold text-bark">{value}</dd>
    </div>
  );
}
