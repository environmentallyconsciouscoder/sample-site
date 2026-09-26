import { BRAND, AUDIENCES, type AudienceId } from "./constants";
import { SectionLabel } from "./SectionLabel";

const CARDS: Record<AudienceId, { title: string; body: string; linkLabel: string }> = {
  retrofit: {
    title: "Retrofit professionals",
    body: "Run assessments, identify defects, manage evidence and generate reports with less admin.",
    linkLabel: "Explore retrofit software",
  },
  housing: {
    title: "Housing associations & councils",
    body: "Manage damp, mould and housing hazards with software designed around Awaab's Law workflows.",
    linkLabel: "Explore housing software",
  },
  landlord: {
    title: "Landlords & property owners",
    body: "Get professional retrofit, DEA and EPC assessments for your properties.",
    linkLabel: "Book an assessment",
  },
};

export function AudienceSection() {
  return (
    <section id="solutions" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Solutions</SectionLabel>
        <h2 className="mb-14 text-center text-3xl font-extrabold text-slate-900 md:text-4xl">Who is RetroSet for?</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {AUDIENCES.map((a) => {
            const card = CARDS[a.id];
            return (
              <a
                key={a.id}
                href={a.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="mb-4 block text-3xl">{a.icon}</span>
                <h3 className="mb-2 text-lg font-bold text-slate-900">{card.title}</h3>
                <p className="mb-6 flex-1 text-sm text-slate-600">{card.body}</p>
                <span className="text-sm font-semibold" style={{ color: BRAND }}>
                  {card.linkLabel} <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
