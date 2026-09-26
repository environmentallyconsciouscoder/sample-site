export const BRAND = "#646cff";
export const BRAND_DARK = "#4f57e8";

export const APP_URL = "https://prod.retroset.app/";

export type AudienceId = "retrofit" | "housing" | "landlord";

// Single source for the three audiences: nav dropdown, audience cards and the demo form selector.
export const AUDIENCES: {
  id: AudienceId;
  icon: string;
  label: string;
  navLabel: string;
  href: string;
  submitLabel: string;
}[] = [
  {
    id: "retrofit",
    icon: "🏗️",
    label: "Retrofit professional",
    navLabel: "For retrofit professionals",
    href: "#software-retrofit",
    submitLabel: "Start my free trial →",
  },
  {
    id: "housing",
    icon: "🏢",
    label: "Housing association or council",
    navLabel: "For housing associations & councils",
    href: "#software-housing",
    submitLabel: "Book my free demo →",
  },
  {
    id: "landlord",
    icon: "🏠",
    label: "Landlord or property owner",
    navLabel: "For landlords & property owners",
    href: "#services",
    submitLabel: "Book my assessment →",
  },
];
