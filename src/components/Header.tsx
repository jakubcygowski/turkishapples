import Link from "next/link";
import { AppleMark } from "./AppleMark";
import { Container } from "./Container";

const navItems = [
  { href: "/turkish-apples", label: "Origin" },
  { href: "/turkish-apple-varieties", label: "Varieties" },
  { href: "/turkish-apples-quality", label: "Quality" },
  { href: "/turkish-apple-export", label: "Export" },
  { href: "/turkish-apples-price", label: "Price" },
  { href: "/turkish-apple-suppliers", label: "Suppliers" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-bark/10 bg-cream/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-bark"
          aria-label="Turkish Apples — home"
        >
          <span className="text-apple-red">
            <AppleMark size={26} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Turkish Apples
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 text-sm text-bark/80 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-apple-red"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-apple-red px-4 py-2 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-apple-red/90"
          >
            Contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
