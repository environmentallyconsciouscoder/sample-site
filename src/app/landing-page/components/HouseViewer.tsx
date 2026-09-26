"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { BRAND } from "./constants";
import { MEASURES, MeasureId } from "./house/houseData";

const HouseScene = dynamic(() => import("./house/HouseScene"), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center text-sm text-slate-500">Loading 3D model…</div>,
});

export function HouseViewer() {
  const [active, setActive] = useState<MeasureId | null>(null);
  const measure = MEASURES.find((m) => m.id === active);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="relative h-[380px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-sky-100 to-white shadow-sm sm:h-[480px]">
          <HouseScene active={active} onSelect={setActive} />
          <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-xs text-slate-500">
            Tap a hotspot to explore · drag to rotate
          </p>
        </div>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {MEASURES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(active === m.id ? null : m.id)}
              className="rounded-full border px-3 py-1 text-xs font-medium transition-colors"
              style={active === m.id ? { background: BRAND, borderColor: BRAND, color: "#fff" } : { background: "#fff", borderColor: `${BRAND}55`, color: "#334155" }}
            >
              {m.title.split(" (")[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:min-h-[480px]">
        {measure ? (
          <>
            <div className="mb-2 flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-900">{measure.title}</h3>
              <button type="button" onClick={() => setActive(null)} aria-label="Close" className="text-xl leading-none text-slate-400 hover:text-slate-900">×</button>
            </div>
            <p className="mb-4 text-slate-600">{measure.summary}</p>
            <ul className="space-y-2">
              {measure.points.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-slate-600">
                  <span style={{ color: BRAND }}>•</span>
                  {p}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex h-full flex-col justify-center text-center">
            <p className="mb-2 text-lg font-bold text-slate-900">Select a hotspot</p>
            <p className="text-sm text-slate-500">Choose a measure on the house to see what it involves and what we check at assessment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
