"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const field = "w-full rounded-[14px] border border-rule bg-cream px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-night";

export default function ContactForm({ types, thanksTitle, thanksText }: { types: readonly string[]; thanksTitle: string; thanksText: string }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    setError("");
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setState("sent");
      form.reset();
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Could not send your message. Please call us instead.");
    }
  }

  if (state === "sent") {
    return (
      <div className="rounded-[20px] bg-sun p-7">
        <h3 className="text-[24px]">{thanksTitle}</h3>
        <p className="mt-2 text-night/75">{thanksText}</p>
        <button className="mt-5 text-[14px] font-medium underline underline-offset-4" onClick={() => setState("idle")}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-[14px]">Full name *<input name="name" required className={field} autoComplete="name" /></label>
        <label className="grid gap-2 text-[14px]">Company<input name="company" className={field} autoComplete="organization" /></label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-[14px]">Email *<input name="email" type="email" required className={field} autoComplete="email" /></label>
        <label className="grid gap-2 text-[14px]">Phone *<input name="phone" type="tel" required className={field} autoComplete="tel" /></label>
      </div>
      <label className="grid gap-2 text-[14px]">Enquiry type
        <select name="type" className={field}>
          {types.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-[14px]">Message *<textarea name="message" required rows={5} className={field} placeholder="Project type, location, size and timeline" /></label>
      {state === "error" && <p className="text-[14px] text-red-700" role="alert">{error}</p>}
      <button type="submit" disabled={state === "sending"} className="group inline-flex h-12 items-center gap-4 justify-self-start rounded-full bg-night pl-6 pr-1.5 text-[14px] font-medium text-white disabled:opacity-60">
        {state === "sending" ? "Sending…" : "Send enquiry"}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sun text-night transition-transform group-hover:rotate-45">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9" /></svg>
        </span>
      </button>
    </form>
  );
}
