import { BRAND } from "./constants";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em]" style={{ color: BRAND }}>
      {children}
    </p>
  );
}
