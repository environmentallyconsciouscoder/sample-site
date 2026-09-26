import { BRAND } from "./constants";
import { SectionLabel } from "./SectionLabel";

const DRIVERS = [
  {
    icon: "🏢",
    tag: "For social housing providers",
    title: "Awaab's Law",
    body: "Social landlords must investigate and fix serious hazards — especially damp and mould — within strict, legally binding timeframes. That needs robust processes for identifying, recording and responding to them.",
  },
  {
    icon: "🏠",
    tag: "For private landlords",
    title: "EPC & energy efficiency",
    body: "Private rental properties in England and Wales must reach EPC band C by 1 October 2030, increasing the need for better property assessment and retrofit planning.",
  },
  {
    icon: "🏗️",
    tag: "For retrofit professionals",
    title: "Retrofit demand",
    body: "The £15 billion Warm Homes Plan is funding home improvements at scale. More retrofit activity means more assessments, evidence, reporting and admin to manage.",
  },
];

export function ProblemSection() {
  return (
    <section id="why-now" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Why RetroSet</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
          Why now?
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-600">
          Regulation and funding are changing what&apos;s expected of UK homes — and of the people who manage them.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DRIVERS.map((d) => (
            <div key={d.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="mb-4 block text-3xl">{d.icon}</span>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest" style={{ color: BRAND }}>{d.tag}</p>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{d.title}</h3>
              <p className="text-sm text-slate-600">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
