import { BRAND } from "./constants";

export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: `linear-gradient(90deg, #fff 0%, ${BRAND} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}
