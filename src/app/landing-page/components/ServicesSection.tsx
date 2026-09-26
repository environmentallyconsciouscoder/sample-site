import { BRAND, BRAND_DARK } from "./constants";
import { SectionLabel } from "./SectionLabel";

const SERVICES = [
  { icon: "📋", title: "Retrofit assessment", body: "Whole-house retrofit assessments carried out by qualified retrofit professionals." },
  { icon: "⚡", title: "DEA & EPC", body: "Domestic Energy Assessments and EPCs delivered accurately and on time." },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Services</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900 md:text-4xl">Professional assessment services</h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-600">
          For landlords, homeowners, housing providers and retrofit projects.
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="mb-4 block text-3xl">{s.icon}</span>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="text-sm text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#demo"
            className="inline-block rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
            Book an assessment
          </a>
        </div>
      </div>
    </section>
  );
}
