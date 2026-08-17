/**
 * The 100 problems we staff.
 * Edit titles, summaries, and categories. Keep `id` stable once live.
 */
export const problemCategories = [
  "Battery",
  "Powertrain",
  "Castings & structure",
  "Assembly & launch",
  "Quality",
  "Supply chain",
  "Cost & throughput",
  "Safety & EHS",
  "Digital",
  "Sustainability",
] as const;

export type ProblemCategory = (typeof problemCategories)[number];

export type Problem = {
  id: number;
  title: string;
  summary: string;
  category: ProblemCategory;
  typicalOwner: string;
};

export const problems: Problem[] = [
  {
    id: 1,
    title: "Cell incoming lot variation that wrecks module OCV",
    summary:
      "Incoming prismatic or pouch lots drift on IR and capacity. We stand up sample plans, hold points, and a disposition path before they hit the stacker.",
    category: "Battery",
    typicalOwner: "Incoming quality / cell SQE",
  },
  {
    id: 2,
    title: "Module stack pressure window too narrow for takt",
    summary:
      "Compression fixtures that only work in the lab. We widen the process window without losing contact resistance or swelling allowance.",
    category: "Battery",
    typicalOwner: "Module PE",
  },
  {
    id: 3,
    title: "Laser weld porosity on busbars and cell tabs",
    summary:
      "Porosity, undercut, and spatter that pass vision and fail pulse. We close the weld recipe, gas, and fixturing together.",
    category: "Battery",
    typicalOwner: "Joining PE",
  },
  {
    id: 4,
    title: "Thermal interface material voids after cure",
    summary:
      "TIM coverage that looks complete and then opens in thermal cycle. Dispense path, bead design, and post-cure inspection.",
    category: "Battery",
    typicalOwner: "Pack PE",
  },
  {
    id: 5,
    title: "Pack leak that only shows after coolant fill",
    summary:
      "Dry leak testers that miss the real path. We correlate helium, air-decay, and wet leak so Job 1 is not a surprise.",
    category: "Battery",
    typicalOwner: "Pack PE / EOL",
  },
  {
    id: 6,
    title: "Coolant loop cleanliness and particle spec",
    summary:
      "Aluminum chips and flux that kill pumps six months out. Flush, filter, and residual specification that purchasing will actually buy.",
    category: "Battery",
    typicalOwner: "Fluids / supplier quality",
  },
  {
    id: 7,
    title: "HVIL and interlock that fail only on the road",
    summary:
      "Interlocks that pass the bench and open under vibration. Connector choice, strain relief, and in-line continuity.",
    category: "Battery",
    typicalOwner: "HV electrical",
  },
  {
    id: 8,
    title: "Thermal runaway vent path blocked by assembly variation",
    summary:
      "Vent plates that work in CAD and clog on the line. We tie dimensional stack-up to the fire-lab result.",
    category: "Battery",
    typicalOwner: "Safety / pack design",
  },
  {
    id: 9,
    title: "Cell-to-pack architecture with no rework path",
    summary:
      "A pack you cannot open without scrapping $20k. Containment, selective rework, and a field-service procedure that is legal.",
    category: "Battery",
    typicalOwner: "Pack engineering",
  },
  {
    id: 10,
    title: "BMS flash and calibration bottleneck at EOL",
    summary:
      "Twenty-minute flashes on a 90-second takt. Parallelization, station design, and a software gate that is not tribal knowledge.",
    category: "Battery",
    typicalOwner: "Controls / software",
  },
  {
    id: 11,
    title: "Swelling allowance vs. pack stiffness after 1,000 cycles",
    summary:
      "Trays that crush cells or rattle them. We close the loop between aging data and the production fixture.",
    category: "Battery",
    typicalOwner: "Pack structures",
  },
  {
    id: 12,
    title: "Degassing and formation capacity that cannot support ramp",
    summary:
      "Cell plants that sold nameplate and cannot form. We model the real constraint and the capital you actually need.",
    category: "Battery",
    typicalOwner: "Cell ops",
  },
  {
    id: 13,
    title: "Electrode coating weight that drifts across the web",
    summary:
      "Cross-web CD variation that becomes capacity mismatch. Coater, calender, and in-line basis-weight control.",
    category: "Battery",
    typicalOwner: "Electrode PE",
  },
  {
    id: 14,
    title: "Dry-room dew point that the HVAC cannot hold at rate",
    summary:
      "A room that is dry at 20% rate and wet at 80%. We find the infiltration and the coil that is lying.",
    category: "Battery",
    typicalOwner: "Facilities / electrode",
  },
  {
    id: 15,
    title: "Tab welding splash that seeds internal shorts",
    summary:
      "Micro-shorts that pass EOL and fail in formation. Weld, isolation, and in-process electrical screens.",
    category: "Battery",
    typicalOwner: "Cell PE",
  },
  {
    id: 16,
    title: "Pack crash structure vs. serviceability trade",
    summary:
      "A tray that is safe and unserviceable, or the reverse. We run the teardown with CAE and the dealer network in the same room.",
    category: "Battery",
    typicalOwner: "Structures / service",
  },
  {
    id: 17,
    title: "Module compression foam that takes a set in summer freight",
    summary:
      "Foam that arrives already crushed. Spec, packaging, and incoming compression test.",
    category: "Battery",
    typicalOwner: "Materials / SQE",
  },
  {
    id: 18,
    title: "Fire-lab results that do not match the production vent stack",
    summary:
      "Prototype packs that pass and production packs that do not. We rebuild the correlation before the regulator asks.",
    category: "Battery",
    typicalOwner: "Safety / homologation",
  },
  {
    id: 19,
    title: "Hairpin winding scrap at the first 90 degrees",
    summary:
      "Wire that kinks on the first bend. Tooling radii, enamel, and a scrap Pareto that is not just “operator.”",
    category: "Powertrain",
    typicalOwner: "Stator PE",
  },
  {
    id: 20,
    title: "Hairpin weld splash inside the slot",
    summary:
      "Welds that look perfect and then fail hipot. Isolation, twist, and post-weld inspection that is fast enough.",
    category: "Powertrain",
    typicalOwner: "Stator PE",
  },
  {
    id: 21,
    title: "Varnish / impregnation voids on hairpin stators",
    summary:
      "Trickle and VPI processes that leave dry spots. Recipe, rotation, and a dielectric test that actually sees them.",
    category: "Powertrain",
    typicalOwner: "Stator PE",
  },
  {
    id: 22,
    title: "Magnet insertion and adhesive cure on rotors",
    summary:
      "Magnets that walk under spin. Press force, adhesive, and a spin-pit screen that is not theater.",
    category: "Powertrain",
    typicalOwner: "Rotor PE",
  },
  {
    id: 23,
    title: "Rotor balance that will not hold after heat",
    summary:
      "A balance that is lost in bake or in the vehicle. We find whether it is mass, fit, or the machine.",
    category: "Powertrain",
    typicalOwner: "Rotor PE",
  },
  {
    id: 24,
    title: "Inverter power-module voiding after sinter or solder",
    summary:
      "Voids that grow in power cycle. Attach process, underfill, and SAM inspection at rate.",
    category: "Powertrain",
    typicalOwner: "Inverter PE",
  },
  {
    id: 25,
    title: "Gate-drive and current-sense calibration at EOL",
    summary:
      "Inverters that pass functional and fail in the vehicle. Fixture, thermal soak, and a software gate that is owned.",
    category: "Powertrain",
    typicalOwner: "Controls / EOL",
  },
  {
    id: 26,
    title: "E-axle NVH that only appears above 80 kph",
    summary:
      "Whine that is not in the dyno report. Gear, inverter switching, and mount stiffness — diagnosed on the same day.",
    category: "Powertrain",
    typicalOwner: "NVH / e-drive",
  },
  {
    id: 27,
    title: "Reducer oil spec vs. e-motor thermal limit",
    summary:
      "Oil that cools the gear and cooks the winding. We settle the spec before the first field return.",
    category: "Powertrain",
    typicalOwner: "Lubricants / e-drive",
  },
  {
    id: 28,
    title: "Park-lock and parking-pawl durability on a heavy EV",
    summary:
      "A mechanism designed for a lighter ICE car. Load, slope, and a test that matches the actual vehicle mass.",
    category: "Powertrain",
    typicalOwner: "Transmission PE",
  },
  {
    id: 29,
    title: "Orange-cable crimp that passes pull and fails millivolt",
    summary:
      "Crimps that look textbook. Cross-section, resistance, and a supplier that will change the die.",
    category: "Powertrain",
    typicalOwner: "HV electrical",
  },
  {
    id: 30,
    title: "Shield continuity on HV harnesses",
    summary:
      "EMI that shows up as a range complaint. Shield termination, pigtails, and a plant-floor continuity check.",
    category: "Powertrain",
    typicalOwner: "HV electrical / EMC",
  },
  {
    id: 31,
    title: "Service disconnect that operators cannot seat at takt",
    summary:
      "A plug that needs three hands. Ergonomics, poka-yoke, and a design change that purchasing will accept.",
    category: "Powertrain",
    typicalOwner: "Assembly / HV",
  },
  {
    id: 32,
    title: "Dyno coverage that does not match the duty cycle",
    summary:
      "A 20-minute dyno that misses the 8-second launch. We rewrite the cycle against the real vehicle use.",
    category: "Powertrain",
    typicalOwner: "Test / e-drive",
  },
  {
    id: 33,
    title: "Giga-cast porosity that only shows after heat treat",
    summary:
      "Fill and vacuum that look good on X-ray of the green casting and open after T6. We close the process window and the NDE gate together.",
    category: "Castings & structure",
    typicalOwner: "Casting PE",
  },
  {
    id: 34,
    title: "Quench distortion that kills the structural tray datum",
    summary:
      "A casting that is in print until it hits the quench. Fixture, agitation, and a residual-stress model the plant will run.",
    category: "Castings & structure",
    typicalOwner: "Heat treat / dimensional",
  },
  {
    id: 35,
    title: "High-pressure die cast fill that starves thin structural ribs",
    summary:
      "Shot profile, gate design, and melt quality. We recover the rib without adding cycle time the business case cannot afford.",
    category: "Castings & structure",
    typicalOwner: "Die cast PE",
  },
  {
    id: 36,
    title: "Alloy choice that survives crash but fails leak or corrosion",
    summary:
      "A materials decision made in CAE and broken on the road. We put crash, leak, and galvanic pairs in the same room.",
    category: "Castings & structure",
    typicalOwner: "Materials science",
  },
  {
    id: 37,
    title: "Structural battery tray that is also the floor — and the leak path",
    summary:
      "The tray carries load, seals coolant, and has to be serviceable. Crash, leak, and access cannot be three different teams.",
    category: "Castings & structure",
    typicalOwner: "Structures / pack",
  },
  {
    id: 38,
    title: "Joining metallurgy between cast Al, extruded Al, and steel",
    summary:
      "SPR, FDS, laser, and adhesive that fight each other. We pick the joint stack the warranty and the takt can both live with.",
    category: "Castings & structure",
    typicalOwner: "Joining / materials",
  },
  {
    id: 39,
    title: "Heat-treat capacity that cannot support the casting ramp",
    summary:
      "Nameplate oven hours that ignore soak, load density, and the real alloy. We model the bottleneck before Job 1.",
    category: "Castings & structure",
    typicalOwner: "Heat treat ops",
  },
  {
    id: 40,
    title: "NDE call rate that operators do not trust on thick sections",
    summary:
      "UT or X-ray that cries wolf on mega-castings. We tune the call, the escape rate, and the disposition path.",
    category: "Castings & structure",
    typicalOwner: "NDE / quality",
  },
  {
    id: 41,
    title: "Machining stock that assumes a casting capability you do not have",
    summary:
      "A print that needs 2 mm of stock and a process that gives 0.5. We reset stock, fixture, and the casting Cpk together.",
    category: "Castings & structure",
    typicalOwner: "Machining / casting PE",
  },
  {
    id: 42,
    title: "Residual stress that walks the structure after paint bake",
    summary:
      "A body or tray that is in tolerance at green and out after oven. We measure metal temperature and the stress path, not air temperature.",
    category: "Castings & structure",
    typicalOwner: "Structures / process",
  },
  {
    id: 43,
    title: "Dissimilar-metal corrosion at structural joints",
    summary:
      "Galvanic pairs that pass a lab coupon and fail at 36 months. Spec, sealer, and a field-correlated test.",
    category: "Castings & structure",
    typicalOwner: "Materials / corrosion",
  },
  {
    id: 44,
    title: "Casting scrap treated like steel scrap in the cost model",
    summary:
      "The most expensive kilograms on the structure. We give porosity, heat-treat, and machine scrap their own walk.",
    category: "Castings & structure",
    typicalOwner: "Finance / PE",
  },
  {
    id: 45,
    title: "Station readiness 90 days before Job 1",
    summary:
      "A launch list that is green in the war room and red on the line. We walk every station with the actual parts.",
    category: "Assembly & launch",
    typicalOwner: "Launch director",
  },
  {
    id: 46,
    title: "Standardized work that no one can run at rate",
    summary:
      "Work instructions written by people who have never built the car. We rewrite them at the station.",
    category: "Assembly & launch",
    typicalOwner: "IE / team leader",
  },
  {
    id: 47,
    title: "Andon that is ignored because it is always on",
    summary:
      "A line that has trained itself not to stop. We reset the threshold and the response.",
    category: "Assembly & launch",
    typicalOwner: "Production",
  },
  {
    id: 48,
    title: "Battery marriage station that is the whole plant constraint",
    summary:
      "One drop, one crane, one chance. We design the buffer, the backup, and the 90-second recovery.",
    category: "Assembly & launch",
    typicalOwner: "GA PE",
  },
  {
    id: 49,
    title: "Underrun of fasteners on HV joints",
    summary:
      "Torque that is logged and still wrong. Tool, socket, and a residual-torque audit that is not theater.",
    category: "Assembly & launch",
    typicalOwner: "Quality / GA",
  },
  {
    id: 50,
    title: "Glass and ADAS calibration after every body move",
    summary:
      "Cameras that need a 20-minute target farm. We sequence, fixture, and decide what can be done offline.",
    category: "Assembly & launch",
    typicalOwner: "ADAS / GA",
  },
  {
    id: 51,
    title: "End-of-line electrical that cannot keep up with software load",
    summary:
      "Flash, code, and a 14-minute stall. Parallel bays, wireless, and a software BOM that is actually frozen.",
    category: "Assembly & launch",
    typicalOwner: "EOL / software",
  },
  {
    id: 52,
    title: "Water test that misses the sunroof and the pack seam",
    summary:
      "A booth aimed at ICE leak paths. We retarget the nozzles at the EV ones.",
    category: "Assembly & launch",
    typicalOwner: "EOL",
  },
  {
    id: 53,
    title: "Roll-test and dyno that do not catch a parked-regen fault",
    summary:
      "A test written for a gasoline car. We add the EV modes that customers actually use on day one.",
    category: "Assembly & launch",
    typicalOwner: "EOL / product",
  },
  {
    id: 54,
    title: "Containment that never comes off after launch",
    summary:
      "Extra inspectors still there at month nine. We kill the ones that are hiding a process.",
    category: "Assembly & launch",
    typicalOwner: "Quality / launch",
  },
  {
    id: 55,
    title: "Layered process audits that are a checkbox",
    summary:
      "An LPA that finds nothing. We rewrite the questions around the actual failure modes.",
    category: "Assembly & launch",
    typicalOwner: "Quality",
  },
  {
    id: 56,
    title: "Night-shift capability that is 12 points below day shift",
    summary:
      "Same equipment, different plant. Supervision, relief, and the one fixture that is not maintained after 6 p.m.",
    category: "Assembly & launch",
    typicalOwner: "Ops",
  },
  {
    id: 57,
    title: "Model-mix explosion in the last 40 stations",
    summary:
      "Options that were “free” in product and expensive on the line. We re-sequence or we kill the option.",
    category: "Assembly & launch",
    typicalOwner: "IE / product",
  },
  {
    id: 58,
    title: "Tooling and spare-parts plan that assumes an ICE parts room",
    summary:
      "HV-specific tools that are on a 16-week lead. We build the crib before the first stop.",
    category: "Assembly & launch",
    typicalOwner: "Maintenance",
  },
  {
    id: 59,
    title: "Training matrix that does not cover high-voltage authorization",
    summary:
      "People building packs who are not legally allowed to. We close the cert, the lockout, and the roster.",
    category: "Assembly & launch",
    typicalOwner: "HR / EHS",
  },
  {
    id: 60,
    title: "Supplier parts that arrive untested for the first 2,000 units",
    summary:
      "A PPAP that was paper. We put the right gates on the dock, not in a portal.",
    category: "Assembly & launch",
    typicalOwner: "SQE / launch",
  },
  {
    id: 61,
    title: "Serial genealogy that breaks at the module-to-pack handoff",
    summary:
      "You can find the cell or the VIN, but not both. We stitch MES across the two buildings.",
    category: "Quality",
    typicalOwner: "Quality systems",
  },
  {
    id: 62,
    title: "VIN-level software bill of materials that is tribal",
    summary:
      "A field campaign you cannot scope. We make the software BOM as real as the hardware one.",
    category: "Quality",
    typicalOwner: "Quality / software",
  },
  {
    id: 63,
    title: "8D cadence that dies at D4",
    summary:
      "Teams that love containment and fear root cause. We run the room until D8 is a habit.",
    category: "Quality",
    typicalOwner: "Quality",
  },
  {
    id: 64,
    title: "Warranty codes that do not map to a station",
    summary:
      "A DTC soup. We rebuild the coding so a plant can actually act.",
    category: "Quality",
    typicalOwner: "Warranty / product",
  },
  {
    id: 65,
    title: "CMM capacity that is two weeks behind the line",
    summary:
      "A lab that is a museum. Offline fixtures, sampling, and the one characteristic that actually moves.",
    category: "Quality",
    typicalOwner: "Metrology",
  },
  {
    id: 66,
    title: "Capability studies run on the wrong characteristic",
    summary:
      "Pretty Cpk on a dimension that does not fail. We pick the ones that do.",
    category: "Quality",
    typicalOwner: "Dimensional / PE",
  },
  {
    id: 67,
    title: "Customer-specific requirements stacked on a young quality system",
    summary:
      "IATF plus three OEM CSR binders. We implement the ones that change a station, not the ones that change a binder.",
    category: "Quality",
    typicalOwner: "QMS",
  },
  {
    id: 68,
    title: "Field-return tear-down with no golden sample",
    summary:
      "A pack on a pallet and no baseline. We build the library before the first campaign.",
    category: "Quality",
    typicalOwner: "Warranty lab",
  },
  {
    id: 69,
    title: "Nondestructive inspection that operators do not trust",
    summary:
      "UT, X-ray, or vision that cries wolf. We tune the call and the escape rate together.",
    category: "Quality",
    typicalOwner: "NDE / quality",
  },
  {
    id: 70,
    title: "Traceability that stops at the batch when the regulator wants the cell",
    summary:
      "A system designed for a steel stamping plant. We get to serial without boiling the ocean.",
    category: "Quality",
    typicalOwner: "Quality systems",
  },
  {
    id: 71,
    title: "Gage R&R that was never done on the HV millivolt stand",
    summary:
      "A number everyone quotes and no one can reproduce. We run the study and then we keep or kill the stand.",
    category: "Quality",
    typicalOwner: "Metrology",
  },
  {
    id: 72,
    title: "Escape to the customer of a known build deviation",
    summary:
      "A deviation log that is a graveyard. We close the ones that are still shipping.",
    category: "Quality",
    typicalOwner: "Quality / production",
  },
  {
    id: 73,
    title: "Single-source cell with no dual-source process",
    summary:
      "A geopolitics problem dressed as a purchasing one. We keep the second process warm.",
    category: "Supply chain",
    typicalOwner: "Purchasing / PE",
  },
  {
    id: 74,
    title: "IRA / USMCA content that purchasing cannot prove",
    summary:
      "A credit at risk because the file is a spreadsheet. We build the evidence the auditor will accept.",
    category: "Supply chain",
    typicalOwner: "Trade / finance",
  },
  {
    id: 75,
    title: "Module localization that copied the Korean line and lost capability",
    summary:
      "Same equipment, different humidity, different people. We transfer the process, not the brochure.",
    category: "Supply chain",
    typicalOwner: "Ops / PE",
  },
  {
    id: 76,
    title: "APQP that starts after tooling is already cut",
    summary:
      "A kickoff in month 18 of a 24-month program. We rebuild the gates that are still useful.",
    category: "Supply chain",
    typicalOwner: "SQE / program",
  },
  {
    id: 77,
    title: "Dock-to-stock on a part that is not capable",
    summary:
      "A lean idea that became a leak. We put inspection back until the process earns it.",
    category: "Supply chain",
    typicalOwner: "Incoming quality",
  },
  {
    id: 78,
    title: "Freight-damaged packs that look fine until leak test",
    summary:
      "A dunnage design from the ICE program. We redesign the shipper around the real mass and the real leak path.",
    category: "Supply chain",
    typicalOwner: "Logistics / pack",
  },
  {
    id: 79,
    title: "Tier-2 that has never built to an automotive PPM",
    summary:
      "A clever startup and a serious OEM. We put the quality system in before the volume.",
    category: "Supply chain",
    typicalOwner: "SQE",
  },
  {
    id: 80,
    title: "Capacity model that assumes 100% cell yield",
    summary:
      "A spreadsheet that will miss Job 1 by 40 days. We put the real yield and the real formation time back in.",
    category: "Supply chain",
    typicalOwner: "SIOP / ops",
  },
  {
    id: 81,
    title: "Tooling ownership that is unclear across three continents",
    summary:
      "A die no one can move and no one will maintain. We write the contract the plant can live with.",
    category: "Supply chain",
    typicalOwner: "Purchasing / legal",
  },
  {
    id: 82,
    title: "Change-control that lags the line by two software drops",
    summary:
      "Parts and code that do not match. We put one gate on both.",
    category: "Supply chain",
    typicalOwner: "Program / software",
  },
  {
    id: 83,
    title: "Hours-per-unit that is 30% above the business case",
    summary:
      "A number everyone argues and no one measures the same way. We baseline it at the station.",
    category: "Cost & throughput",
    typicalOwner: "IE / finance",
  },
  {
    id: 84,
    title: "OEE that is high while the constraint is starving",
    summary:
      "A vanity metric. We measure the real constraint and ignore the rest for a quarter.",
    category: "Cost & throughput",
    typicalOwner: "Ops",
  },
  {
    id: 85,
    title: "First-time yield that is being bought with offline repair",
    summary:
      "A green board hiding a hospital. We put the hours back on the line where they belong.",
    category: "Cost & throughput",
    typicalOwner: "Quality / ops",
  },
  {
    id: 86,
    title: "Scrap on copper, magnets, and cells that finance treats as steel",
    summary:
      "The most expensive kilograms in the plant. We give them their own walk.",
    category: "Cost & throughput",
    typicalOwner: "Finance / PE",
  },
  {
    id: 87,
    title: "Direct labor standards written for a different architecture",
    summary:
      "An ICE standard on an EV line. We restudy the work.",
    category: "Cost & throughput",
    typicalOwner: "IE",
  },
  {
    id: 88,
    title: "Energy intensity of formation, ovens, and dry rooms",
    summary:
      "A utility bill that surprised everyone after Job 1. We find the load that is on when it should not be.",
    category: "Cost & throughput",
    typicalOwner: "Energy / facilities",
  },
  {
    id: 89,
    title: "Buffer design that oscillates the whole plant",
    summary:
      "Too little and the line dies; too much and quality hides. We size it on the real MTTR.",
    category: "Cost & throughput",
    typicalOwner: "IE / ops",
  },
  {
    id: 90,
    title: "Overtime that has become the capacity plan",
    summary:
      "A Saturday that is now a Tuesday. We put the hours back into the week or we tell the truth about rate.",
    category: "Cost & throughput",
    typicalOwner: "Ops / HR",
  },
  {
    id: 91,
    title: "High-voltage authorization and lockout that production bypasses",
    summary:
      "A procedure that is correct and unused. We make the safe way the fast way.",
    category: "Safety & EHS",
    typicalOwner: "EHS / production",
  },
  {
    id: 92,
    title: "Thermal-event response that has never been drilled at night",
    summary:
      "A plan that lives in a binder. We run the drill on third shift with the real brigade.",
    category: "Safety & EHS",
    typicalOwner: "EHS / plant manager",
  },
  {
    id: 93,
    title: "Damaged-pack quarantine that is a parking lot",
    summary:
      "A pack with an unknown SOC sitting next to the shipping dock. Isolation, SOC, and a written hold.",
    category: "Safety & EHS",
    typicalOwner: "EHS / quality",
  },
  {
    id: 94,
    title: "Arc-flash labels and PPE that do not match the real incident energy",
    summary:
      "A study from the ICE plant. We redo it for the HV rooms that exist now.",
    category: "Safety & EHS",
    typicalOwner: "EHS / electrical",
  },
  {
    id: 95,
    title: "Solvent and NMP exposure on an electrode line",
    summary:
      "A dry room that is also a chemical plant. Monitoring, recovery, and a medical plan.",
    category: "Safety & EHS",
    typicalOwner: "EHS / electrode",
  },
  {
    id: 96,
    title: "MES that operators walk around with a paper traveler",
    summary:
      "A system that takes 40 seconds to confirm a 20-second job. We cut the clicks or we kill the screen.",
    category: "Digital",
    typicalOwner: "IT / IE",
  },
  {
    id: 97,
    title: "Alarm floods that hide the one that matters",
    summary:
      "A PLC that cries all shift. We put hygiene back in before we buy another dashboard.",
    category: "Digital",
    typicalOwner: "Controls",
  },
  {
    id: 98,
    title: "OT network that shares a VLAN with the guest Wi-Fi",
    summary:
      "A plant that is one phishing email from a stopped line. Segmentation that maintenance can still work with.",
    category: "Digital",
    typicalOwner: "IT / OT",
  },
  {
    id: 99,
    title: "Second-life and recycle path that starts at the scrap dock",
    summary:
      "Packs with residual energy and no owner. We write the handoff before the first pallet.",
    category: "Sustainability",
    typicalOwner: "Sustainability / service",
  },
  {
    id: 100,
    title: "Plant carbon intensity that is worse after the ICE line shut down",
    summary:
      "Formation, dry rooms, and ovens that outrun the old foundry. We find the real kWh per vehicle and the first ten cuts.",
    category: "Sustainability",
    typicalOwner: "Energy / sustainability",
  },
];

export function problemsByCategory(category: ProblemCategory | "All") {
  if (category === "All") return problems;
  return problems.filter((p) => p.category === category);
}
