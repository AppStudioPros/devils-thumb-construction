/**
 * Central site configuration — single source of truth for SEO, schema, and metadata.
 * Only include verified facts. Never invent values.
 */

export const siteConfig = {
  name: "Devil's Thumb Construction",
  url: "https://devilsthumbconstruction.com",
  description:
    "Residential and light commercial construction across the Colorado Front Range. Design-build, custom homes, remodels, additions, garages, ADUs, concrete, excavation, and more.",
  phone: "720-322-6899",
  phoneE164: "+17203226899",
  email: "j.kennedy@devilsthumbconstruction.com",
  logo: "https://devilsthumbconstruction.com/images/logo.png",
  /** Communities listed in the site footer — verified */
  serviceAreas: [
    "Denver",
    "Lakewood",
    "Golden",
    "Arvada",
    "Westminster",
    "Thornton",
    "Broomfield",
    "Boulder",
    "Longmont",
    "Louisville",
    "Superior",
    "Erie",
    "Evergreen",
    "Conifer",
    "Morrison",
    "Idaho Springs",
  ],
} as const;
