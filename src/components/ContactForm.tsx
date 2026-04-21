"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContact, type ContactState } from "@/app/actions/contact";

const initialState: ContactState = { status: "idle", message: "" };

const topics = [
  "General inquiry",
  "Variety & specification request",
  "Price & offer request",
  "Export & logistics",
  "Supplier introduction",
] as const;

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-apple-red px-6 py-3 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-apple-red/90 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <Send size={16} />
      {pending ? "Sending…" : label}
    </button>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="mt-1 text-xs text-apple-red">{msg}</p>;
}

const inputBase =
  "w-full rounded-xl border border-bark/15 bg-cream px-4 py-2.5 text-sm text-bark placeholder:text-bark-soft/60 transition-colors focus:border-apple-red focus:outline-none focus:ring-2 focus:ring-apple-red/20";
const labelBase = "block text-xs font-semibold uppercase tracking-wider text-bark/70";

export function ContactForm({
  variant = "full",
  defaultTopic,
  submitLabel = "Send inquiry",
}: {
  variant?: "full" | "compact";
  defaultTopic?: string;
  submitLabel?: string;
}) {
  const [state, formAction] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-card border border-leaf-green/30 bg-leaf-green/5 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 flex-shrink-0 text-leaf-green" size={22} />
          <div>
            <p className="font-display text-lg font-semibold text-bark">Message received</p>
            <p className="mt-1 text-sm leading-relaxed text-bark-soft">{state.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4" noValidate>
      {/* honeypot for spam bots — humans shouldn't see this */}
      <div className="hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelBase}>
            Your name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`mt-1.5 ${inputBase}`}
          />
          <FieldError msg={state.errors?.name} />
        </div>
        <div>
          <label htmlFor="email" className={labelBase}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`mt-1.5 ${inputBase}`}
          />
          <FieldError msg={state.errors?.email} />
        </div>
      </div>

      {variant === "full" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className={labelBase}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className={`mt-1.5 ${inputBase}`}
            />
          </div>
          <div>
            <label htmlFor="country" className={labelBase}>
              Country / destination market
            </label>
            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              className={`mt-1.5 ${inputBase}`}
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="topic" className={labelBase}>
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue={defaultTopic ?? topics[0]}
          className={`mt-1.5 ${inputBase}`}
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelBase}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={variant === "compact" ? 4 : 6}
          placeholder="Variety, calibre, packaging, destination market, target volume…"
          className={`mt-1.5 ${inputBase} resize-y`}
        />
        <FieldError msg={state.errors?.message} />
      </div>

      {state.status === "error" && (
        <div className="flex items-start gap-2 rounded-xl border border-apple-red/30 bg-apple-red/5 p-3 text-sm text-apple-red">
          <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-bark-soft">
          By sending this form you agree to be contacted about your inquiry.
        </p>
        <SubmitButton label={submitLabel} />
      </div>
    </form>
  );
}
