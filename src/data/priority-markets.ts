export const priorityMarkets = {
  golden: {
    name: "Golden",
    heading: "General Contractor in Golden, CO",
    intro: "Devils Thumb Construction builds additions and custom homes and remodels existing homes in Golden. If your lot slopes or has tight access, we can talk through how that affects the layout, foundation, and construction access.",
    description: "Planning a home addition, whole-home remodel, or custom home in Golden, CO? Call Devils Thumb Construction for a free consultation.",
  },
  arvada: {
    name: "Arvada",
    heading: "General Contractor in Arvada, CO",
    intro: "Devils Thumb Construction handles whole-home remodels, additions, and basement finishing in Arvada. Tell us what you want to change, whether that means opening up a ranch floor plan or making an unfinished basement usable.",
    description: "Need a remodeling contractor in Arvada, CO? Talk with Devils Thumb Construction about whole-home remodels, home additions, and basement finishing.",
  },
  boulder: {
    name: "Boulder",
    heading: "General Contractor in Boulder, CO",
    intro: "Devils Thumb Construction is a design-build contractor serving Boulder. We handle design and construction for home additions, whole-home remodels, and custom homes. Share your address early so we can discuss which approvals may apply.",
    description: "Talk with a Boulder design-build contractor about a whole-home remodel, home addition, custom home, or garage ADU conversion.",
  },
};

export const priorityServices: Record<string, string> = {
  remodeling: "Whole-Home Remodeling",
  "home-renovations-additions": "Home Addition Contractor",
  "garage-adu": "Garage ADU Conversion Contractor",
  "custom-home-design-construction": "Design-Build Custom Home Builder",
  "basement-finishing": "Basement Finishing Contractor",
};

export function getPriorityMarket(slug: string) {
  return Object.hasOwn(priorityMarkets, slug)
    ? priorityMarkets[slug as keyof typeof priorityMarkets]
    : undefined;
}
