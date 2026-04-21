"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message" | "company", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const topic = String(formData.get("topic") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();

  if (honeypot) {
    return { status: "success", message: "Thank you. Your message has been received." };
  }

  const errors: ContactState["errors"] = {};
  if (name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10) errors.message = "Please write a short message (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      errors,
    };
  }

  const payload = { name, email, company, country, topic, message, receivedAt: new Date().toISOString() };

  // TODO: wire real email delivery here (Resend, SendGrid, SMTP via nodemailer, or a form service).
  // For now we log on the server so the operator can see submissions in deployment logs.
  console.log("[contact] new inquiry", payload);

  return {
    status: "success",
    message:
      "Thank you. Your inquiry has been received — we typically reply within one business day.",
  };
}
