import { BRAND, BRAND_DARK, APP_URL } from "./constants";
import { SectionLabel } from "./SectionLabel";

const PRODUCTS = [
  {
    id: "software-retrofit",
    icon: "📐",
    tag: "For retrofit professionals",
    title: "Retrofit software",
    body: "Assess properties, capture evidence, identify issues and generate reports with less manual work.",
    cta: { href: APP_URL, label: "Start free trial" },
  },
  {
    id: "software-housing",
    icon: "🛡️",
    tag: "For housing associations & councils",
    title: "Awaab's Law software",
    body: "Manage hazard reporting, evidence, workflows and compliance across your housing stock.",
    cta: { href: "#demo", label: "Book a demo" },
  },
];

export function SoftwareSection() {
  return (
    <section id="software" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Software</SectionLabel>
        <h2 className="mb-14 text-center text-3xl font-extrabold text-slate-900 md:text-4xl">Software built for housing and retrofit teams</h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {PRODUCTS.map((p) => (
            <div key={p.id} id={p.id} className="flex scroll-mt-24 flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="mb-4 block text-3xl">{p.icon}</span>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>{p.tag}</p>
              <h3 className="mb-2 text-xl font-bold text-slate-900">{p.title}</h3>
              <p className="mb-8 flex-1 text-slate-600">{p.body}</p>
              <a
                href={p.cta.href}
                className="self-start rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
                style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
              >
                {p.cta.label}
              </a>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl border p-6 text-center sm:flex-row sm:text-left" style={{ borderColor: `${BRAND}55`, background: `${BRAND}12` }}>
          <div>
            <p className="font-bold text-slate-900">Don&apos;t need software?</p>
            <p className="text-sm text-slate-700">Retrofit assessments, DEA surveys and EPCs delivered by qualified professionals.</p>
          </div>
          <a href="#services" className="shrink-0 text-sm font-semibold" style={{ color: BRAND_DARK }}>
            Explore services →
          </a>
        </div>
      </div>
    </section>
  );
}
