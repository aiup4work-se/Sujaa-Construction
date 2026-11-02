"use client";

import { useState } from "react";
import { footer } from "@/site.config";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <form
      className="flex w-full max-w-[460px] flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
      onSubmit={(e) => { e.preventDefault(); setDone(true); /* connect to your mailing list provider here */ }}
    >
      <label htmlFor="newsletter-email" className="shrink-0 text-[15px]">{footer.newsletterLabel}</label>
      {done ? (
        <p className="text-[15px] text-sun" role="status">{footer.newsletterThanks}</p>
      ) : (
        <div className="flex flex-1 items-center border-b border-white/40 focus-within:border-sun">
          <input id="newsletter-email" type="email" required placeholder={footer.newsletterPlaceholder}
            className="w-full bg-transparent py-3 text-[15px] text-white outline-none placeholder:text-white/55" />
          <button type="submit" aria-label="Subscribe" className="px-1 text-white hover:text-sun">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </form>
  );
}
