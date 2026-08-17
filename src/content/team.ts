/**
 * Practice principals. Replace names, bios, and portraits.
 * Use `/images/...` paths once you drop photos into public/images.
 */
export type Principal = {
  name: string;
  role: string;
  focus: string;
  bio: string;
  prior: string;
};

export const principals: Principal[] = [
  {
    name: "Add principal name",
    role: "Managing principal",
    focus: "Launch and plant operations",
    bio: "Replace this bio. Typical background: former OEM launch director or plant manager with battery or e-drive responsibility.",
    prior: "Former OEM — plant / launch",
  },
  {
    name: "Add principal name",
    role: "Principal, battery",
    focus: "Cell, module, and pack",
    bio: "Replace this bio. Typical background: cell or pack process engineering, fire-lab correlation, and first-time yield.",
    prior: "Former cell / pack OEM or Tier-1",
  },
  {
    name: "Add principal name",
    role: "Principal, e-drive",
    focus: "Stator, inverter, HV electrical",
    bio: "Replace this bio. Typical background: hairpin, inverter attach, and end-of-line test for e-axles.",
    prior: "Former e-drive Tier-1",
  },
  {
    name: "Add principal name",
    role: "Principal, quality systems",
    focus: "Traceability, warranty, IATF",
    bio: "Replace this bio. Typical background: customer quality, serial genealogy, and field campaigns.",
    prior: "Former OEM quality",
  },
];

export const method = [
  {
    step: "01",
    title: "Walk the constraint",
    copy: "We start on the station that is actually stopping the plant. Not the dashboard. Not the hotel.",
  },
  {
    step: "02",
    title: "Name the characteristic",
    copy: "One dimension, one weld, one millivolt, one software gate. If we cannot name it, we are not ready to change it.",
  },
  {
    step: "03",
    title: "Change the process, then the headcount",
    copy: "Containment is a loan. We take it off on a published schedule once the process earns it.",
  },
  {
    step: "04",
    title: "Leave a plant that can run nights",
    copy: "If second shift cannot hold the window without us, we are not done.",
  },
];
