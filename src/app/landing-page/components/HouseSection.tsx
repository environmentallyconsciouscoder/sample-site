import { BRAND, BRAND_DARK } from "./constants";
import { SectionLabel } from "./SectionLabel";
import { HouseViewer } from "./HouseViewer";

export function HouseSection() {
  return (
    <section id="explore" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>How retrofit works</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-slate-900 md:text-4xl">Explore a retrofit</h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
          Tap a hotspot to see the measures a retrofit assessment would consider, from insulation to heat pumps and ventilation.
        </p>
        <HouseViewer />
        <div className="mt-10 text-center">
          <a
            href="#demo"
            className="inline-block rounded-xl px-8 py-4 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
            style={{ background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)` }}
          >
            Book a retrofit assessment
          </a>
        </div>
      </div>
    </section>
  );
}
