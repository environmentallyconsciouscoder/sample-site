import { BRAND } from "./constants";

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white"
      style={{ background: `${BRAND}33`, border: `1px solid ${BRAND}66` }}
    >
      {children}
    </span>
  );
}
