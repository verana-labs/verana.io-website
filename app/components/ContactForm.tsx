"use client";

import { useMemo, useState } from "react";

const TOPICS = [
  { value: "build", label: "Build / technical" },
  { value: "integrator", label: "Integrator / partner" },
  { value: "use-case", label: "Use case / adoption" },
  { value: "press", label: "Press or analyst" },
  { value: "general", label: "General" },
];

type Status = "idle" | "submitting" | "ok" | "error";

export default function ContactForm() {
  const renderedAt = useMemo(() => Date.now(), []);
  const [status, setStatus] = useState<Status>("idle");
  const [errorFields, setErrorFields] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorFields([]);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = Object.fromEntries(fd.entries());
    payload.rendered_at = String(renderedAt);
    payload.consent = fd.get("consent") ? "true" : "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setErrorFields(Array.isArray(json.fields) ? json.fields : []);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="card p-8">
        <p className="display text-xl text-ink">Thanks, message received.</p>
        <p className="mt-2 text-muted">
          We will get back to you. In the meantime, the docs and GitHub are the
          fastest way to start.
        </p>
      </div>
    );
  }

  const labelCls = "block text-sm font-medium text-ink mb-1.5";
  const inputCls =
    "w-full rounded-lg border border-rule bg-bg px-3 py-2 text-sm text-ink outline-none focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="card space-y-5 p-6 sm:p-8">
      {/* honeypot (hidden from humans) */}
      <input
        type="text"
        name="website_hp"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div>
        <label htmlFor="topic" className={labelCls}>
          Inquiry type
        </label>
        <select id="topic" name="topic" required className={inputCls} defaultValue="">
          <option value="" disabled>
            Choose one
          </option>
          {TOPICS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input id="name" name="name" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputCls}
            aria-invalid={errorFields.includes("email")}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="organization" className={labelCls}>
            Organization <span className="text-muted">(optional)</span>
          </label>
          <input id="organization" name="organization" className={inputCls} />
        </div>
        <div>
          <label htmlFor="company_website" className={labelCls}>
            Website or LinkedIn <span className="text-muted">(optional)</span>
          </label>
          <input id="company_website" name="company_website" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputCls}
          aria-invalid={errorFields.includes("message")}
        />
      </div>

      <div>
        <label htmlFor="source" className={labelCls}>
          How did you hear about us? <span className="text-muted">(optional)</span>
        </label>
        <input id="source" name="source" className={inputCls} />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input type="checkbox" name="consent" required className="mt-1" />
        <span>
          I agree that my details are processed to respond to this inquiry, per the{" "}
          <a href="/privacy" className="text-accent hover:underline">
            privacy policy
          </a>
          .
        </span>
      </label>

      {status === "error" ? (
        <p className="text-sm text-red-400">
          Something went wrong. Please check the fields and try again.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary w-full disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
