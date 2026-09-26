import { BRAND, BRAND_DARK } from "./constants";
import { Pill } from "./Pill";
import { GradientText } from "./GradientText";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-24 pt-36" style={{ background: "linear-gradient(160deg, #ffffff 0%, #f4f5ff 60%, #e9ebff 100%)" }}>
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-20 blur-[120px]" style={{ background: BRAND }} />

      <div className="relative z-10 mx-auto max-w-4xl space-y-6 text-center">
        <Pill>Retrofit software &amp; services</Pill>

        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-6xl lg:text-7xl">
          Better homes. Less admin. <GradientText>Better compliance.</GradientText>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-slate-600 md:text-xl">
          RetroSet helps retrofit professionals, housing providers and property owners assess homes, manage defects and stay on top of retrofit and housing requirements.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#software"
            className="rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
            Explore software
          </a>
          <a href="#services" className="rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50">
            Explore our services
          </a>
        </div>

        <p className="text-sm font-medium text-slate-500">
          🏗️ Built by <span className="font-semibold text-slate-900">qualified retrofit professionals</span>, for the teams improving UK homes.
        </p>
      </div>
    </section>
  );
}
