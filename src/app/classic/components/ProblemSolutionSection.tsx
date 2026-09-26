import { BRAND } from "./constants";
import { SectionLabel } from "./SectionLabel";

const PROBLEMS = [
  { icon: "⏳", text: "Hours lost manually checking hundreds of site photos" },
  { icon: "📋", text: "Inconsistent defect reports written from scratch each time" },
  { icon: "🗂️", text: "Survey data trapped in spreadsheets and email chains" },
];

const SOLUTIONS = [
  { icon: "📸", title: "Auto photo validation", body: "AI reviews site photos against PAS 2035 standards." },
  { icon: "📄", title: "Instant report generation", body: "Structured defect and assessment reports are generated automatically—ready to send." },
  { icon: "🗺️", title: "Photo Validation Checks", body: "Photos are automatically checked for completeness and compliance before entering your workflow." },
];

export function ProblemSolutionSection() {
  return (
    <section className="bg-[#0d0d1a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>The problem</SectionLabel>
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
          Retrofit teams are drowning in manual work
        </h2>

        <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div key={p.text} className="flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <span className="text-2xl">{p.icon}</span>
              <p className="text-sm text-gray-300">{p.text}</p>
            </div>
          ))}
        </div>

        <SectionLabel>The solution</SectionLabel>
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl">
          RetroSet replaces the manual grind with{" "}
          <span style={{ color: BRAND }}>intelligent automation</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <span className="mb-4 block text-3xl">{s.icon}</span>
              <h3 className="mb-2 font-bold text-white">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm font-medium text-gray-400 text-center mt-3">
        🏗️ Designed by <span className="text-white font-semibold">qualified retrofit coordinators</span> — built around how your team actually works
      </p>
    </section>
  );
}
