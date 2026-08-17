import {
  BatteryCharging,
  CircuitBoard,
  Factory,
  Gauge,
  Layers3,
  ShieldCheck,
  Truck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  icon: LucideIcon;
  work: string[];
};

export const services: Service[] = [
  {
    slug: "battery",
    title: "Battery cell, module, and pack",
    summary:
      "From incoming cell characterization through pack leak, HVIL, and thermal runaway containment. We stabilize first-time yield before Job 1.",
    image: "/images/battery-module.jpg",
    icon: BatteryCharging,
    work: [
      "Cell incoming quality and lot-trace architecture",
      "Module stacking, weld, and TIM process windows",
      "Pack leak, coolant, and HVIL end-of-line",
      "Thermal runaway, vent path, and fire-lab correlation",
    ],
  },
  {
    slug: "edrive",
    title: "E-drive, inverter, and HV electrical",
    summary:
      "Hairpin, magnet, inverter, and orange-cable systems. We close the gap between design intent and a repeatable takt.",
    image: "/images/edrive.jpg",
    icon: CircuitBoard,
    work: [
      "Hairpin winding and impregnation yield",
      "Inverter power-module attach and underfill",
      "HV harness routing, crimp, and HVIL",
      "NVH, dyno, and end-of-line test coverage",
    ],
  },
  {
    slug: "castings-structure",
    title: "Castings, structure, and materials science",
    summary:
      "Mega- and giga-castings, structural battery trays, and the alloys that have to survive crash, leak, and rate. We close porosity, heat treat, and joint integrity before the structure becomes the floor.",
    image: "/images/body-shop.jpg",
    icon: Factory,
    work: [
      "High-pressure die cast porosity, fill, and dimensional capability",
      "Heat-treat, quench distortion, and residual stress windows",
      "Structural tray / skateboard stiffness vs. leak and service access",
      "Alloy selection, joining metallurgy, and NDE that plant can run",
    ],
  },
  {
    slug: "launch",
    title: "Final assembly and launch",
    summary:
      "We run the war room. Process confirmation, station readiness, and the last 90 days before Job 1 — on the floor, not in a hotel ballroom.",
    image: "/images/eol-vehicle.jpg",
    icon: Workflow,
    work: [
      "Station readiness and standardized work",
      "Andon, stop-the-line, and layered process audit",
      "End-of-line electrical, water, and road test",
      "90-day launch war rooms and containment",
    ],
  },
  {
    slug: "quality",
    title: "Quality, warranty, and traceability",
    summary:
      "Serial-level trace from cell lot to VIN. We build the quality system that survives a field campaign and a regulator.",
    image: "/images/quality-lab.jpg",
    icon: ShieldCheck,
    work: [
      "IATF / VDA / customer-specific quality systems",
      "Serial genealogy and MES architecture",
      "Field-return tear-down and 8D cadence",
      "Metrology, CMM, and capability studies",
    ],
  },
  {
    slug: "supply",
    title: "Supply chain and localization",
    summary:
      "IRA, USMCA, and dual-source programs. We stand up module, pack, and e-drive capacity in North America without losing process capability.",
    image: "/images/plant-walk.jpg",
    icon: Truck,
    work: [
      "Supplier process audits and APQP",
      "Reshoring and dual-source process transfer",
      "Incoming inspection and dock-to-stock",
      "Capacity models for cell-constrained programs",
    ],
  },
  {
    slug: "cost",
    title: "Cost, throughput, and labor",
    summary:
      "Hours-per-unit, first-time yield, and the true constraint. We find the hour you are paying for twice.",
    image: "/images/war-room.jpg",
    icon: Gauge,
    work: [
      "Value-stream and hours-per-unit baselining",
      "Constraint analysis and buffer design",
      "Direct labor standards and skill matrices",
      "Scrap, rework, and energy cost-down",
    ],
  },
  {
    slug: "digital",
    title: "Digital thread and plant systems",
    summary:
      "MES, PLC, and the data that actually gets used at 2 a.m. We specify what to collect — and what to ignore.",
    image: "/images/hv-electrical.jpg",
    icon: Layers3,
    work: [
      "MES / QMS / PLM interfaces that operators will use",
      "Station-level SPC and alarm hygiene",
      "OEE that matches the real constraint",
      "Cyber and OT segmentation for HV lines",
    ],
  },
];
