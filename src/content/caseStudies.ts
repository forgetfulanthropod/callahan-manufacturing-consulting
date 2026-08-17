/**
 * Case studies. Swap client names, metrics, and photos when NDAs allow.
 * Set `disclosed` to true when the OEM can be named.
 */
export type CaseStudy = {
  slug: string;
  client: string;
  disclosed: boolean;
  title: string;
  summary: string;
  image: string;
  location: string;
  year: string;
  duration: string;
  category: string;
  metrics: { label: string; value: string }[];
  situation: string;
  approach: string;
  result: string;
  problemsSolved: number[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "midwest-pack-yield",
    client: "Volume OEM — Midwest",
    disclosed: false,
    title: "Pack first-time yield from 61% to 94% before Job 1",
    summary:
      "A new skateboard pack line was going to miss launch. We rebuilt leak, TIM, and HVIL in twelve weeks on the live floor.",
    image: "/images/battery-module.jpg",
    location: "United States",
    year: "2024",
    duration: "12 weeks",
    category: "Battery pack",
    metrics: [
      { label: "First-time yield", value: "61% → 94%" },
      { label: "Leak escapes", value: "−88%" },
      { label: "Hours per pack", value: "−22%" },
    ],
    situation:
      "The pack line had been tooled to a prototype process. Dry leak testers did not correlate to wet fill. TIM coverage looked complete on the camera and opened after thermal cycle. Launch was 11 weeks out and the plant was already running containment inspectors on every shift.",
    approach:
      "We sat in the marriage and EOL stations, not the war room. Helium, air-decay, and wet leak were correlated on the same 40 packs. Dispense path and post-cure inspection were rewritten. HVIL strain relief was changed with the Tier-1 in the same week. Containment was taken off station by station as each gate earned it.",
    result:
      "Job 1 held. First-time yield sat at 94% in the first full week of rate. The extra inspectors left in week ten. The same recipe transferred to the second shift without a second consulting team.",
    problemsSolved: [4, 5, 7, 45, 54],
  },
  {
    slug: "german-eaxle-nvh",
    client: "German premium OEM",
    disclosed: false,
    title: "E-axle whine closed without a gear recut",
    summary:
      "A highway whine that only appeared above 80 kph. We isolated inverter switching from gear mesh and kept the existing housing.",
    image: "/images/edrive.jpg",
    location: "Germany",
    year: "2023",
    duration: "9 weeks",
    category: "E-drive",
    metrics: [
      { label: "Cabin dB(A) at 120 kph", value: "−4.1" },
      { label: "Tooling recut", value: "Avoided" },
      { label: "Warranty code", value: "Closed" },
    ],
    situation:
      "Customers and journalists were reporting a tonal whine the dyno report did not show. The program was heading toward a gear recut and a six-month delay. Three internal teams owned three different root causes.",
    approach:
      "We put the vehicle, the dyno, and the inverter software in the same week. Mount stiffness, switching frequency, and mesh orders were separated with a single test matrix. The gear was innocent. A software map and a mount shim closed it.",
    result:
      "The recut was cancelled. The warranty code was closed before the next build phase. The same method is now the plant’s standard NVH gate for the follow-on axle.",
    problemsSolved: [26, 32, 64],
  },
  {
    slug: "korean-module-us",
    client: "Korean cell and module maker",
    disclosed: false,
    title: "US module line that kept Korean capability",
    summary:
      "A copied line in a different climate with different people. We transferred the process, not the brochure.",
    image: "/images/plant-walk.jpg",
    location: "United States",
    year: "2025",
    duration: "18 weeks",
    category: "Localization",
    metrics: [
      { label: "Module Cpk vs. home plant", value: "Matched" },
      { label: "Ramp to rate", value: "On plan" },
      { label: "IRA evidence file", value: "Audit-ready" },
    ],
    situation:
      "Equipment was identical. Humidity, incoming cell lots, and the skill matrix were not. Early stacks were drifting on pressure and OCV. The OEM customer was already on site with a red APQP.",
    approach:
      "We ran a true process transfer: same characteristics, same gages, different climate. Incoming cell sample plans were rebuilt for the US lot mix. Compression fixtures were re-windowed. The IRA content file was taken out of a spreadsheet and into an auditor-ready packet.",
    result:
      "Capability matched the home plant on the characteristics that fail in the field. The OEM lifted the red. The plant ran rate on the original SIOP date.",
    problemsSolved: [1, 2, 74, 75, 80],
  },
  {
    slug: "giga-cast-porosity",
    client: "Volume OEM — Midwest",
    disclosed: false,
    title: "Giga-cast porosity closed before structural Job 1",
    summary:
      "A mega-casting that passed green X-ray and opened after heat treat. We recovered fill, quench, and NDE without a tool rewrite.",
    image: "/images/body-shop.jpg",
    location: "North America",
    year: "2024",
    duration: "14 weeks",
    category: "Castings & structure",
    metrics: [
      { label: "Porosity escapes", value: "−92%" },
      { label: "Heat-treat Cpk", value: "Back in window" },
      { label: "Tool rewrite", value: "Avoided" },
    ],
    situation:
      "Structural rear underbody castings were shipping with porosity that only appeared after T6. NDE was tuned for the green state. Leadership was preparing a die redesign and a six-month delay.",
    approach:
      "We put shot profile, vacuum, and quench in the same week. Green vs. heat-treated X-ray correlation was rebuilt on production parts. Disposition criteria were rewritten so operators trusted the call.",
    result:
      "Escapes fell over 90%. The tool rewrite was deferred. Structural Job 1 held on the original date.",
    problemsSolved: [33, 34, 35, 40],
  },
  {
    slug: "structural-tray-leak",
    client: "California EV OEM",
    disclosed: false,
    title: "Structural tray that sealed without giving up crash load",
    summary:
      "A battery tray that was also the floor: crash, leak, and service access fighting each other. We closed the stack-up without a second casting.",
    image: "/images/paint-shop.jpg",
    location: "United States",
    year: "2023",
    duration: "10 weeks",
    category: "Castings & structure",
    metrics: [
      { label: "Wet leak escapes", value: "To near zero" },
      { label: "Crash load path", value: "Held" },
      { label: "Second casting", value: "Avoided" },
    ],
    situation:
      "The structural tray carried crash load and sealed the pack. Dry leak looked acceptable; wet leak after thermal cycle did not. Structures and pack were in separate war rooms.",
    approach:
      "We put CAE, leak, and materials in one room. Joint stack, sealer path, and service access were traded against a single fixture buyoff. Residual stress after paint bake was measured on metal, not air.",
    result:
      "Wet leak closed. Crash requirements held. The second structural casting was not required for launch.",
    problemsSolved: [36, 37, 38, 42],
  },
  {
    slug: "hv-crimp-escape",
    client: "Tier-1 inverter and harness house",
    disclosed: false,
    title: "HV crimp escapes stopped before a campaign",
    summary:
      "Pull tests were passing. Millivolt was not. We caught it on the dock, not in the field.",
    image: "/images/hv-electrical.jpg",
    location: "Mexico / United States",
    year: "2025",
    duration: "6 weeks",
    category: "HV electrical",
    metrics: [
      { label: "Millivolt escapes", value: "To zero" },
      { label: "Die change", value: "11 days" },
      { label: "Campaign", value: "Avoided" },
    ],
    situation:
      "A new orange-cable family passed pull and visual. Residual resistance was drifting. The OEM had already seen two vehicles with a connector thermal event in durability.",
    approach:
      "Cross-sections, not opinions. The die had walked. We put millivolt on the dock as a gate, changed the die with the supplier, and rewrote the residual-torque / residual-resistance audit so it was not theater.",
    result:
      "Escapes went to zero. The campaign was not launched. The same gate is now on two other harness families.",
    problemsSolved: [29, 30, 49, 71],
  },
  {
    slug: "launch-war-room",
    client: "Volume OEM — South",
    disclosed: false,
    title: "90-day launch war room that actually walked the line",
    summary:
      "A green war-room board and a red plant. We made station readiness mean the station could run.",
    image: "/images/war-room.jpg",
    location: "United States",
    year: "2024",
    duration: "16 weeks",
    category: "Launch",
    metrics: [
      { label: "Stations at rate, Job 1", value: "96%" },
      { label: "Software flash time", value: "14 → 6 min" },
      { label: "Containment inspectors", value: "Off by week 10" },
    ],
    situation:
      "The launch book was on schedule. The last forty stations were not. Software flash was a 14-minute stall. Standardized work had been written off-site. Night shift was twelve points behind day shift.",
    approach:
      "Every station was walked with the actual parts, the actual tool, and the actual person. Flash was parallelized. Work instructions were rewritten at the car. Night-shift fixtures got the same maintenance window as day.",
    result:
      "Job 1 ran. Ninety-six percent of stations held takt in week one. Containment came off on a published schedule instead of becoming a second plant.",
    problemsSolved: [45, 46, 51, 56, 59],
  },
  {
    slug: "trace-cell-to-vin",
    client: "European OEM + cell JV",
    disclosed: false,
    title: "Cell-to-VIN genealogy that survived a regulator",
    summary:
      "Two buildings, two MES systems, one serial number that could not be found. We stitched them before the audit.",
    image: "/images/quality-lab.jpg",
    location: "Europe",
    year: "2025",
    duration: "11 weeks",
    category: "Quality systems",
    metrics: [
      { label: "Cell → VIN lookup", value: "< 90 sec" },
      { label: "Software BOM by VIN", value: "Complete" },
      { label: "Audit finding", value: "Closed" },
    ],
    situation:
      "A field event required a cell-lot scope. The module plant could find the cell. The vehicle plant could find the VIN. No one could join them in under a day. Software on the BMS was tribal.",
    approach:
      "We did not buy a new MES. We specified the handoff, the serial, and the software BOM, then made both plants produce it. The lookup was rehearsed with the quality and legal teams before the regulator returned.",
    result:
      "Cell-to-VIN is under ninety seconds. The software bill of materials is as real as the hardware one. The finding closed.",
    problemsSolved: [61, 62, 70, 82],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
