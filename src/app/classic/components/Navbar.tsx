import Image from "next/image";
import { BRAND } from "./constants";

export function Navbar() {
  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md"
      style={{ background: "rgba(13,13,26,0.8)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <Image src="/images/white-logo.png" alt="RetroSet" width={120} height={36} className="object-contain" />
      <a
        href="https://prod.retroset.app/"
        className="rounded-xl border px-5 py-2 text-sm font-semibold text-white transition-colors hover:text-white"
        style={{ borderColor: `${BRAND}66`, background: `${BRAND}18` }}
      >
        Sign in
      </a>
    </nav>
  );
}
