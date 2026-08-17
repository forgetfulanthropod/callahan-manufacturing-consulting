/**
 * Company-wide copy. Edit this file first.
 * Swap names, offices, phone, and OEM list before launch.
 */
export const site = {
  name: "Callahan Manufacturing Consulting",
  shortName: "Callahan",
  legalName: "Callahan Manufacturing Consulting LLC",
  tagline: "The plant-floor practice for electric vehicle programs.",
  lede:
    "We sit with OEM and Tier-1 launch teams from cell to curb. Battery, e-drive, castings and structure, materials science, and final assembly — the problems that actually stop a program.",
  founded: "2014",
  hq: "Detroit, Michigan",
  offices: [
    { city: "Detroit", region: "Michigan", note: "Headquarters" },
    { city: "Stuttgart", region: "Germany", note: "EU programs" },
    { city: "Seoul", region: "Korea", note: "Cell and module" },
    { city: "Austin", region: "Texas", note: "New-energy OEMs" },
  ],
  email: "inquiries@callahanmfg.com",
  phone: "+1 (313) 555-0148",
  hours: "Monday–Friday, 08:00–18:00 ET",
  engagementNote:
    "Typical engagements run 6–26 weeks on site. We staff former plant managers, launch directors, and process engineers — not slide-only advisors.",
  oemNote:
    "Replace the client names below with your real programs. Placeholder labels keep OEM NDAs intact until you approve disclosure.",
  clients: [
    { name: "Volume OEM — Midwest", role: "Battery pack + GA launch" },
    { name: "German premium OEM", role: "E-axle and NVH" },
    { name: "Korean cell maker", role: "US module localization" },
    { name: "California EV OEM", role: "First-time yield" },
    { name: "Japanese transplant", role: "Structural castings" },
    { name: "Tier-1 inverter house", role: "End-of-line test" },
  ],
  stats: [
    { value: "47", label: "OEM and Tier-1 programs" },
    { value: "14", label: "Battery pack launches" },
    { value: "100", label: "Recurring plant problems we staff" },
    { value: "6–26", label: "Week typical engagement" },
  ],
  footerBlurb:
    "Independent manufacturing consulting for electric vehicle OEMs and their supply base. Not affiliated with any automaker.",
} as const;

export const nav = [
  { to: "/capabilities" as const, label: "Capabilities" },
  { to: "/problems" as const, label: "100 Problems" },
  { to: "/work" as const, label: "Case studies" },
  { to: "/about" as const, label: "Practice" },
  { to: "/contact" as const, label: "Contact" },
];
