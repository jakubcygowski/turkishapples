import { WhatsAppIcon, WHATSAPP_NUMBER } from "./WhatsAppButton";

export function WhatsAppFloating({
  message = "Hello, I'd like to ask about Turkish apples.",
}: {
  message?: string;
}) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 ring-4 ring-[#25D366]/20 transition-all hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-xl sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30"
      />
      <WhatsAppIcon size={30} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-bark px-3 py-1.5 text-xs font-medium text-cream opacity-0 shadow-md transition-opacity group-hover:opacity-100 sm:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
