import Image from "next/image";
import { BRAND, BRAND_DARK } from "./constants";
import { Pill } from "./Pill";
import { GradientText } from "./GradientText";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-40 text-center" style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #131320 60%, #1a1030 100%)" }}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[120px]" style={{ background: BRAND }} />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full opacity-10 blur-[100px]" style={{ background: BRAND }} />

      <div className="relative z-10 max-w-4xl space-y-6">
        <div className="flex justify-center">
          <Image src="/images/white-logo.png" alt="RetroSet" width={160} height={48} className="object-contain" />
        </div>

        <Pill>Retrofit management for professionals handling multiple projects at scale</Pill>

        <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
          Cut retrofit admin time{" "}
          <GradientText>without the manual grind</GradientText>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
          RetroSet automates workflows, detects defects and compliance issues, and generates reports—so your team can spend less time on admin and more time on site.
        </p>

        <p className="text-sm font-medium text-gray-400">
          🏗️ Designed by <span className="text-white font-semibold">qualified retrofit coordinators</span> — built around how your team actually works
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#demo"
            className="rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
            Book a free demo
          </a>
        </div>

        <p className="text-sm text-gray-500">Currently onboarding early access teams</p>
      </div>

      <div className="relative z-10 mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-6 backdrop-blur-sm">
        {[
          { value: "Less", label: "Admin time per job" },
          { value: "Faster", label: "Turnaround per job" },
          { value: "Leaner", label: "No extra headcount needed" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1 px-4">
            <span className="text-3xl font-black" style={{ color: BRAND }}>{s.value}</span>
            <span className="text-xs text-gray-400">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
