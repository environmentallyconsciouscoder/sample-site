"use client";

import { BRAND, BRAND_DARK, APP_URL, AUDIENCES } from "./constants";
import { useContactForm } from "../hooks/useContactForm";

const SUCCESS_COPY: Record<string, string> = {
  retrofit: "We'll set up your free trial and send your login details.",
  housing: "Check your inbox — we'll send a calendar link to book your personalised demo.",
  landlord: "We'll be in touch to arrange your assessment.",
};

export function DemoForm() {
  const { form, handleChange, handleSubmit, isLoading, isSuccess, errorMessage } = useContactForm();
  // The select stores the audience label so the enquiry email reads naturally.
  const audience = AUDIENCES.find((a) => a.label === form.audience);

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-10 shadow-sm text-center">
        <span className="text-5xl">🎉</span>
        <h3 className="text-xl font-bold text-slate-900">We&apos;ll be in touch within 24 hours</h3>
        <p className="text-sm text-slate-600">{audience ? SUCCESS_COPY[audience.id] : SUCCESS_COPY.housing}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-[#646cff] focus:ring-1 focus:ring-[#646cff]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">I am a… *</label>
        <select required name="audience" value={form.audience} onChange={handleChange} className={inputClass}>
          <option value="" disabled>Select one</option>
          {AUDIENCES.map((a) => (
            <option key={a.id} value={a.label}>{a.label}</option>
          ))}
        </select>
        {audience?.id === "retrofit" && (
          <p className="mt-2 text-xs text-slate-500">
            Want to jump straight in?{" "}
            <a href={APP_URL} className="font-semibold" style={{ color: BRAND_DARK }}>Create your free account →</a>
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">Full name *</label>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith" className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-slate-600">Email *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@company.co.uk" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">Company or organisation *</label>
        <input required name="company" value={form.company} onChange={handleChange} placeholder="Retrofit Co. Ltd" className={inputClass} />
      </div>
      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          {audience?.id === "landlord" ? "Tell us about your properties" : "Anything specific you'd like to see?"}
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder={
            audience?.id === "landlord"
              ? "e.g. 3 rental properties, need EPCs before re-letting..."
              : "e.g. We do around 50 properties a month and currently use spreadsheets..."
          }
          className={inputClass + " resize-none"}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-xl py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
        style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
      >
        {isLoading ? "Sending…" : audience?.submitLabel ?? "Get in touch →"}
      </button>
      {errorMessage && <p className="text-center text-xs text-red-600">{errorMessage}</p>}
      <p className="text-center text-xs text-slate-500">No commitment. We reply within 24 hours. Your data stays private.</p>
    </form>
  );
}
