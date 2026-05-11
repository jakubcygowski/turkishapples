import { Mail, MessageSquare } from "lucide-react";
import { Container } from "./Container";
import { ContactForm } from "./ContactForm";
import { WhatsAppButton, WHATSAPP_DISPLAY } from "./WhatsAppButton";

export const CONTACT_EMAIL = "contact@turkishapples.com";

export function ContactSection({
  eyebrow = "Contact",
  title = "Talk to a Turkish apple specialist",
  description = "Send us your specification — variety, calibre, packaging and destination market — and we will come back with a concrete commercial answer.",
  variant = "full",
  defaultTopic,
  id = "contact",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  variant?: "full" | "compact";
  defaultTopic?: string;
  id?: string;
}) {
  return (
    <section id={id} className="border-t border-bark/10 bg-paper-soft py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-apple-red">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-bark sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-bark-soft">
            {description}
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div className="flex gap-3">
              <Mail size={18} className="mt-0.5 flex-shrink-0 text-apple-red" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-bark/70">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-bark transition-colors hover:text-apple-red"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <MessageSquare size={18} className="mt-0.5 flex-shrink-0 text-apple-red" />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-bark/70">
                  Response time
                </dt>
                <dd className="mt-1 text-bark-soft">
                  Usually within one business day (Monday–Friday, Türkiye time).
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-bark/70">
              Prefer instant chat?
            </p>
            <WhatsAppButton
              variant="solid"
              size="sm"
              className="mt-3"
              message="Hello, I'd like to ask about Turkish apples."
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </WhatsAppButton>
          </div>
        </div>

        <div className="rounded-card border border-bark/10 bg-cream p-6 shadow-sm sm:p-8">
          <ContactForm variant={variant} defaultTopic={defaultTopic} />
        </div>
      </Container>
    </section>
  );
}
