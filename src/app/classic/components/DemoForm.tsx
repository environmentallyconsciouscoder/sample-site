"use client";

import { BRAND, BRAND_DARK } from "./constants";
import { useContactForm } from "../hooks/useContactForm";

export function DemoForm() {
  const { form, handleChange, handleSubmit, isLoading, isSuccess, errorMessage } = useContactForm();

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <span className="text-5xl">🎉</span>
        <h3 className="text-xl font-bold text-white">We&apos;ll be in touch within 24 hours</h3>
        <p className="text-sm text-gray-400">Check your inbox — we&apos;ll send a calendar link to book your personalised demo.</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">Full name *</label>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-gray-400">Work email *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@company.co.uk" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-400">Company name *</label>
        <input required name="company" value={form.company} onChange={handleChange} placeholder="Retrofit Co. Ltd" className={inputClass} />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-gray-400">Anything specific you&apos;d like to see?</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. We do around 50 properties a month and currently use spreadsheets..."
          className={inputClass + " resize-none"}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-xl py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
      >
        {isLoading ? "Sending…" : "Book my free demo →"}
      </button>
      {errorMessage && <p className="text-center text-xs text-red-400">{errorMessage}</p>}
      <p className="text-center text-xs text-gray-500">No commitment. 30-minute call. Your data stays private.</p>
    </form>
  );
}
