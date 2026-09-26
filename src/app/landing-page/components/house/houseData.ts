export type MeasureId = "solar" | "heatpump" | "glazing" | "wall" | "roof" | "floor" | "ventilation";

export interface Measure {
  id: MeasureId;
  title: string;
  summary: string;
  points: string[];
}

export const MEASURES: Measure[] = [
  {
    id: "solar",
    title: "Solar PV panels",
    summary: "Generate your own electricity from the roof and cut what you buy from the grid.",
    points: ["Best on unshaded south, east or west roof slopes", "Pairs well with a heat pump and battery storage", "Roof condition and structure checked at assessment"],
  },
  {
    id: "heatpump",
    title: "Air source heat pump",
    summary: "Low-carbon heating that moves heat from outside air into the home.",
    points: ["Works best in a well-insulated, airtight home", "Radiator and hot water cylinder sizing checked at design", "Replaces gas or oil boilers"],
  },
  {
    id: "glazing",
    title: "Double glazing windows",
    summary: "Two sealed panes cut heat loss, draughts and noise compared with single glazing.",
    points: ["Also reduces condensation risk on the glass", "Trickle vents or mechanical ventilation must be considered", "Check conservation area and listed building rules"],
  },
  {
    id: "wall",
    title: "Wall insulation (external / internal)",
    summary: "Walls are one of the biggest sources of heat loss in an uninsulated home.",
    points: ["External: insulation fixed outside and rendered, no loss of floor space", "Internal: insulated lining fitted inside, good for listed or period fronts", "Cavity walls may be filled instead — checked at survey"],
  },
  {
    id: "roof",
    title: "Roof / loft insulation",
    summary: "Warm air rises, so insulating the roof space is often the quickest win.",
    points: ["Loft floor, rafter or flat roof options", "Keep ventilation paths clear to avoid damp and mould", "Check for existing damp before any works"],
  },
  {
    id: "floor",
    title: "Floor insulation",
    summary: "Insulate suspended timber or solid floors to stop heat and draughts escaping below.",
    points: ["Suspended floors: insulation between joists from below", "Solid floors: rigid boards laid over the slab", "Ventilation of the void must be maintained"],
  },
  {
    id: "ventilation",
    title: "Ventilation",
    summary: "As homes get airtight, good ventilation keeps air fresh and protects against damp and mould.",
    points: ["Extract fans, trickle vents, or MVHR heat recovery", "Central to PAS 2035 and Awaab's Law compliance", "Specified through a ventilation strategy"],
  },
];
