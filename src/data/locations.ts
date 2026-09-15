export interface Location {
  slug: string;
  name: string;
  county: string;
  description: string;
  featuredServices: string[];
  localNote: string;
}

export const locations: Location[] = [
  {
    slug: "denver",
    name: "Denver",
    county: "Denver County",
    description:
      "Denver has a wide mix of housing stock, from century-old bungalows in the Highlands to mid-century ranches in Park Hill to newer infill construction along the urban corridors. We work across the city on remodels, additions, kitchen and bathroom upgrades, and full gut renovations. The permit process runs through Denver Community Planning and Development, and we know how to move projects through that office without unnecessary delays.",
    featuredServices: [
      "remodeling",
      "home-renovations-additions",
      "kitchen-bathroom-remodeling",
      "basement-finishing",
      "garage-adu",
      "electrical",
    ],
    localNote:
      "Denver's high-density neighborhoods often require party wall agreements and neighbor notification for structural work close to property lines.",
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    county: "Jefferson County",
    description:
      "Lakewood has a lot of mid-century housing stock that's ready for updating. Ranch homes from the 1950s through the 1970s are common, and many homeowners are adding square footage or modernizing layouts that were designed for a different era. Jefferson County handles permits here, and most projects in Lakewood move through that office at a predictable pace.",
    featuredServices: [
      "remodeling",
      "basement-finishing",
      "kitchen-bathroom-remodeling",
      "home-renovations-additions",
      "exterior-renovation",
      "electrical",
    ],
    localNote:
      "Many Lakewood ranch homes have unfinished basements that are well-suited for conversion to living space once egress windows are installed.",
  },
  {
    slug: "golden",
    name: "Golden",
    county: "Jefferson County",
    description:
      "Golden sits at the mouth of Clear Creek Canyon, which means building here involves more slope, more rock, and more excavation than most Front Range suburbs. Homes in Golden range from historic bungalows in the walkable downtown core to larger properties climbing the hillsides. We handle both the urban infill work in town and the more involved site prep for hillside builds.",
    featuredServices: [
      "excavation",
      "custom-stone-work",
      "concrete-flatwork-foundations",
      "remodeling",
      "home-renovations-additions",
      "exterior-renovation",
    ],
    localNote:
      "Many Golden properties on the hillsides require engineered foundations and retaining walls due to the grade and variable soil conditions.",
  },
  {
    slug: "arvada",
    name: "Arvada",
    county: "Jefferson County",
    description:
      "Arvada is the heart of our service area. We've worked on projects from the Olde Town corridor to the newer subdivisions along the western edge toward the foothills. The housing mix is broad, from 1950s brick ranches in the older neighborhoods to newer two-story builds in the master-planned areas. Jefferson County handles permitting for unincorporated parts of Arvada, and the city runs its own building department for projects inside city limits.",
    featuredServices: [
      "remodeling",
      "basement-finishing",
      "kitchen-bathroom-remodeling",
      "home-renovations-additions",
      "concrete-flatwork-foundations",
      "electrical",
    ],
    localNote:
      "Arvada's clay-heavy soil requires proper drainage planning on any project involving excavation or new concrete flatwork.",
  },
  {
    slug: "westminster",
    name: "Westminster",
    county: "Jefferson and Adams Counties",
    description:
      "Westminster spans two counties, which can affect which building department handles your permit depending on your address. The housing stock skews toward 1970s through 1990s construction, with a mix of two-stories, ranch homes, and tri-levels. We work on full remodels, kitchen and bathroom updates, basement finishes, and exterior work across the city.",
    featuredServices: [
      "remodeling",
      "basement-finishing",
      "kitchen-bathroom-remodeling",
      "exterior-renovation",
      "home-renovations-additions",
      "electrical",
    ],
    localNote:
      "Westminster projects on the Adams County side permit through that county's building department rather than through the city directly.",
  },
  {
    slug: "thornton",
    name: "Thornton",
    county: "Adams County",
    description:
      "Thornton is one of the more affordable areas on the north Front Range and has seen significant growth over the past two decades. There's a wide range of housing types, from older ranch homes in the south part of the city to newer construction near the E-470 corridor. We handle kitchen and bathroom remodels, basement finishes, exterior updates, and full renovations across Thornton.",
    featuredServices: [
      "kitchen-bathroom-remodeling",
      "basement-finishing",
      "remodeling",
      "exterior-renovation",
      "home-renovations-additions",
      "concrete-flatwork-foundations",
    ],
    localNote:
      "Adams County permitting covers most of Thornton, and inspection scheduling has been running on a predictable cadence in recent years.",
  },
  {
    slug: "broomfield",
    name: "Broomfield",
    county: "Broomfield County",
    description:
      "Broomfield is its own county, which means permitting goes directly through the city and county government. Much of the housing stock was built in the 1990s and 2000s, putting it in the 20-to-30-year window where systems are aging and layouts are ready for an update. We work on kitchen remodels, basement finishes, full renovations, and new construction in the newer sections of the city.",
    featuredServices: [
      "kitchen-bathroom-remodeling",
      "basement-finishing",
      "remodeling",
      "new-home-construction",
      "home-renovations-additions",
      "exterior-renovation",
    ],
    localNote:
      "Broomfield is a combined city and county, so all permits go through the Broomfield Community Development department regardless of which neighborhood you're in.",
  },
  {
    slug: "boulder",
    name: "Boulder",
    county: "Boulder County",
    description:
      "Boulder has older housing stock in the core neighborhoods, a strong preference for quality materials and energy-efficient construction, and one of the more thorough permit and review processes in Colorado. Homeowners here tend to invest in their properties for the long haul. We bring architectural design capability to Boulder projects, which helps when working through the city's design review process for additions and significant remodels.",
    featuredServices: [
      "architectural-design",
      "remodeling",
      "home-renovations-additions",
      "kitchen-bathroom-remodeling",
      "exterior-renovation",
      "basement-finishing",
    ],
    localNote:
      "Boulder's building department requires energy code compliance above the state minimum, and historic districts add a review layer for properties in designated areas.",
  },
  {
    slug: "longmont",
    name: "Longmont",
    county: "Boulder County",
    description:
      "Longmont has a good mix of older homes in the established east-side neighborhoods and newer construction further west. It's grown steadily and has a strong local economy, which means solid demand for quality renovations and new builds. Permitting runs through the city of Longmont and moves at a reasonable pace for most residential scopes.",
    featuredServices: [
      "remodeling",
      "kitchen-bathroom-remodeling",
      "basement-finishing",
      "home-renovations-additions",
      "electrical",
      "plumbing",
    ],
    localNote:
      "Longmont's older southeast neighborhoods have homes from the 1940s and 1950s that often need full electrical and plumbing updates as part of any larger remodel.",
  },
  {
    slug: "louisville",
    name: "Louisville",
    county: "Boulder County",
    description:
      "Louisville is a smaller city with a tight-knit feel and well-kept older neighborhoods. Many of the homes in Louisville date to the 1970s and 1980s, and there's consistent demand for kitchen and bathroom updates, basement finishes, and exterior work. We've done projects throughout Louisville's neighborhoods and have good working relationships with the city's building department.",
    featuredServices: [
      "kitchen-bathroom-remodeling",
      "basement-finishing",
      "remodeling",
      "exterior-renovation",
      "electrical",
      "plumbing",
    ],
    localNote:
      "Louisville's neighborhoods around Coal Creek have some of the oldest housing stock in Boulder County, with homes that frequently need updated mechanical systems during a full renovation.",
  },
  {
    slug: "superior",
    name: "Superior",
    county: "Boulder County",
    description:
      "Superior has been rebuilding in a significant way since the Marshall Fire in late 2021. There's ongoing demand for new construction, exterior rebuilds, and updated systems in homes that survived but sustained damage. We work on new builds, exterior renovations, insurance restoration, and full interior remodels across Superior.",
    featuredServices: [
      "new-home-construction",
      "exterior-renovation",
      "remodeling",
      "insurance-work",
      "home-renovations-additions",
      "custom-home-design-construction",
    ],
    localNote:
      "Many Superior properties are still in various stages of repair or reconstruction following the Marshall Fire, and the local building department has adapted its processes for the volume of active projects.",
  },
  {
    slug: "erie",
    name: "Erie",
    county: "Weld and Boulder Counties",
    description:
      "Erie has grown fast over the past decade and continues to see new residential development on the north side of town. The community has a mix of newer subdivisions and established neighborhoods closer to the historic downtown. We work on new construction in Erie's growing corridors as well as remodels and additions in the older sections.",
    featuredServices: [
      "new-home-construction",
      "garages",
      "concrete-flatwork-foundations",
      "remodeling",
      "home-renovations-additions",
      "kitchen-bathroom-remodeling",
    ],
    localNote:
      "Erie spans both Weld and Boulder counties, and the applicable building department depends on your property's precise location within those boundaries.",
  },
  {
    slug: "evergreen",
    name: "Evergreen",
    county: "Jefferson County",
    description:
      "Evergreen sits at about 7,000 feet, and that elevation shapes everything about how you build here. Frost depths are greater, snow loads are higher, drainage has to work harder, and exterior materials need to hold up against UV and temperature swings that are more extreme than anything you'd see in Denver. We do mountain construction correctly, with the site work, engineering, and material choices that the altitude demands.",
    featuredServices: [
      "custom-home-design-construction",
      "excavation",
      "concrete-flatwork-foundations",
      "custom-stone-work",
      "exterior-renovation",
      "hvac",
    ],
    localNote:
      "Evergreen building projects require frost depth footings to 36 to 48 inches and roofing systems designed for the area's significant annual snow load.",
  },
  {
    slug: "conifer",
    name: "Conifer",
    county: "Jefferson County",
    description:
      "Conifer is largely unincorporated Jefferson County, spread across a broad area of the foothills and lower mountains at around 8,000 feet. Properties here often have long driveways, meaningful slope, well and septic systems, and access conditions that require planning before a shovel goes in the ground. We work on mountain home builds, renovations, garages, and site work across Conifer and the surrounding unincorporated areas.",
    featuredServices: [
      "custom-home-design-construction",
      "excavation",
      "garages",
      "exterior-renovation",
      "hvac",
      "concrete-flatwork-foundations",
    ],
    localNote:
      "Many Conifer properties rely on private well and septic systems, which requires coordination with Jefferson County Environmental Health for any project that affects those systems.",
  },
  {
    slug: "morrison",
    name: "Morrison",
    county: "Jefferson County",
    description:
      "Morrison is a small town at the base of the foothills, just above Red Rocks. Properties here include historic in-town homes, canyon properties along Bear Creek, and larger lots climbing toward Evergreen. The town has its own character, and building here requires awareness of Jefferson County open space adjacency rules and the flood plain considerations along the creek corridor.",
    featuredServices: [
      "custom-home-design-construction",
      "custom-stone-work",
      "excavation",
      "remodeling",
      "exterior-renovation",
      "home-renovations-additions",
    ],
    localNote:
      "Properties along Bear Creek in Morrison may fall within the FEMA flood plain, which adds a review step to any project affecting drainage or site grade.",
  },
  {
    slug: "idaho-springs",
    name: "Idaho Springs",
    county: "Clear Creek County",
    description:
      "Idaho Springs is a historic mining town in Clear Creek Canyon at about 7,500 feet. It's a full mountain build environment, with rocky terrain, significant snow loads, and access conditions that vary widely by property. We work on mountain homes in Idaho Springs and the Clear Creek corridor, handling new construction and renovations in a setting that rewards careful site planning and durable materials.",
    featuredServices: [
      "custom-home-design-construction",
      "excavation",
      "exterior-renovation",
      "concrete-flatwork-foundations",
      "custom-stone-work",
      "hvac",
    ],
    localNote:
      "Idaho Springs permits through Clear Creek County, and projects in the historic downtown core may require review by the local historic preservation board for any exterior changes.",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
