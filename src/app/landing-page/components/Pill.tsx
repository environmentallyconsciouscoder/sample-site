import { BRAND, BRAND_DARK } from "./constants";

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest"
      style={{ background: `${BRAND}1a`, border: `1px solid ${BRAND}55`, color: BRAND_DARK }}
    >
      {children}
    </span>
  );
}
