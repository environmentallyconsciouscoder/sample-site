import { BRAND } from "./constants";
import { Pill } from "./Pill";
import { GradientText } from "./GradientText";
import { DemoForm } from "./DemoForm";

export function CtaSection() {
  return (
    <section id="demo" className="relative overflow-hidden px-6 py-24" style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #131320 100%)" }}>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full opacity-10 blur-[140px]" style={{ background: BRAND }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <Pill>Get started today</Pill>
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              See RetroSet working on{" "}
              <GradientText>your projects</GradientText>
            </h2>
            <p className="text-gray-300">
              Book a 30-minute demo and we&apos;ll show you exactly how RetroSet handles your current workflow.
            </p>

            <ul className="space-y-3">
              {[
                "Live walkthrough of all workflows",
                "We'll analyse in real time",
                "Full Q&A with the team",
                "No sales pressure — just the product",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: BRAND }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
}
