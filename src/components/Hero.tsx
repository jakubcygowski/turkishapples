import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { AppleMark } from "./AppleMark";
import { TurkishFlag } from "./TurkishFlag";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pb-20 pt-14 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-apple-red/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-leaf-green/15 blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-bark sm:text-6xl md:text-7xl">
              A story of the apple,
              <br />
              <span className="italic text-apple-red">told from Turkey.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bark-soft">
              Turkish apples are more than fruit from a country. They are an
              export category with scale, structure and character — shaped by
              the orchards of Isparta, Karaman and Niğde, and the hands that
              sort, pack and ship them to markets around the world.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/turkish-apple-varieties"
                className="inline-flex items-center gap-2 rounded-full bg-apple-red px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-apple-red-dark"
              >
                Explore varieties
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/turkish-apples"
                className="inline-flex items-center gap-2 rounded-full border border-bark/15 px-5 py-3 text-sm font-semibold text-bark transition-colors hover:border-apple-red hover:text-apple-red"
              >
                Read the story
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-square max-w-md">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-gradient-to-br from-sun/40 via-apple-red/20 to-leaf-green/30 blur-2xl"
              />
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-bark/10 bg-cream">
                <div className="text-apple-red">
                  <AppleMark size={220} />
                </div>
                <span
                  aria-hidden
                  className="absolute left-8 top-10 text-leaf-green"
                >
                  <LeafIcon />
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-10 right-8 rotate-12 text-leaf-deep"
                >
                  <LeafIcon size={36} />
                </span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-xs text-bark-soft">
              <TurkishFlag className="opacity-90" />
              <span className="font-display italic">Isparta</span>
              <span className="divider-dot" />
              <span className="font-display italic">Karaman</span>
              <span className="divider-dot" />
              <span className="font-display italic">Niğde</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function LeafIcon({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 42c0-18 14-32 36-36-4 22-18 36-36 36Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M8 40c8-10 18-20 32-32"
        stroke="#FBF6EC"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
