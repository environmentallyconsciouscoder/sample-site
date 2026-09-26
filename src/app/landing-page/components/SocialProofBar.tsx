// Logos live in /public/logos. Entries without a `logo` fall back to a text placeholder.
const MEMBERSHIPS: { name: string; logo?: string }[] = [
  { name: "Retrofit Academy", logo: "/logos/retrofit-logo.svg" },
  { name: "MyConstructor", logo: "/logos/myconstructor.svg" },
  { name: "ECMK", logo: "/logos/ecmk.svg" },
  { name: "Carbon13", logo: "/logos/Carbon13_logo.webp" },
];

export function SocialProofBar() {
  return (
    <section id="credentials" className="border-y border-slate-200 bg-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Proud members of</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {MEMBERSHIPS.map((m) => (
            <div
              key={m.name}
              className={`flex h-20 items-center justify-center rounded-xl px-4 ${
                m.logo ? "border border-slate-200 bg-white" : "border border-dashed border-slate-300 bg-slate-50"
              }`}
            >
              {m.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={m.logo} alt={m.name} className="h-10 w-auto max-w-full object-contain" />
              ) : (
                <span className="text-sm text-slate-400">{m.name} logo</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
