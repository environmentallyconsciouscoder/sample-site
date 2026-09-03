import { BRAND } from "./constants";
import { SectionLabel } from "./SectionLabel";

const VALUE_ITEMS = [
  {
    title: "Faster photo reviews",
    detail: "What used to take a full morning could run in the background while your assessor drives to the next site.",
  },
  {
    title: "Lower costs per property",
    detail: "Fewer rework trips and less admin overhead across the assessment workflow.",
  },
  {
    title: "Consistent report quality",
    detail: "Every report follows the same structure, every time — no matter who ran the workflow.",
  },
];

export function ValueSection() {
  return (
    <section className="px-6 py-24" style={{ background: "linear-gradient(180deg, #0d0d1a 0%, #111128 100%)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Time &amp; money</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white md:text-4xl">
          Real workflows. Real time back.
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
          Built to cut down the admin work that eats into your day.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_ITEMS.map((v) => (
            <div
              key={v.title}
              className="relative overflow-hidden rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16163a 100%)", border: `1px solid ${BRAND}33` }}
            >
              <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-20 blur-2xl" style={{ background: BRAND }} />
              <p className="mb-3 text-lg font-bold" style={{ color: BRAND }}>{v.title}</p>
              <p className="text-xs text-gray-400">{v.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
