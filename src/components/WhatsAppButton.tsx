import type { ReactNode } from "react";

export const WHATSAPP_NUMBER = "48733634773";
export const WHATSAPP_DISPLAY = "+48 733 634 773";

function buildHref(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.05 4.91A10.04 10.04 0 0 0 12 2C6.5 2 2.04 6.46 2.04 11.96c0 1.76.46 3.48 1.34 5L2 22l5.2-1.36a9.96 9.96 0 0 0 4.8 1.22h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7Zm-7.05 15.3h-.01a8.28 8.28 0 0 1-4.22-1.16l-.3-.18-3.08.81.82-3-.2-.31a8.27 8.27 0 0 1-1.27-4.41c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.29.86 5.86 2.43a8.23 8.23 0 0 1 2.43 5.86c0 4.57-3.72 8.25-8.33 8.25Zm4.55-6.18c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.13.17 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z" />
    </svg>
  );
}

export function WhatsAppButton({
  message,
  variant = "solid",
  size = "md",
  children,
  className = "",
}: {
  message?: string;
  variant?: "solid" | "outline" | "subtle";
  size?: "sm" | "md";
  children?: ReactNode;
  className?: string;
}) {
  const sizeCls =
    size === "sm" ? "px-4 py-2 text-sm" : "px-5 py-3 text-sm";

  const variantCls =
    variant === "solid"
      ? "bg-[#25D366] text-white hover:bg-[#1ebe5d]"
      : variant === "outline"
        ? "border border-bark/15 bg-cream text-bark hover:border-[#25D366] hover:text-[#1ebe5d]"
        : "text-bark/80 hover:text-[#1ebe5d]";

  return (
    <a
      href={buildHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`inline-flex items-center gap-2 rounded-full font-semibold transition-colors ${sizeCls} ${variantCls} ${className}`}
    >
      <WhatsAppIcon size={size === "sm" ? 16 : 18} />
      {children ?? "WhatsApp"}
    </a>
  );
}
