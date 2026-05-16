export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "DEC 2023 - PRESENT",
    company: "Vedhas Technology Solutions Pvt. Ltd",
    role: "Frontend Developer",
    bullets: [
      "Delivered full-scale frontend modules across 8+ production projects spanning React and Angular.",
      "Built and maintained complex UI architectures including dynamic multi-role forms, real-time chat, design systems, and dashboard interfaces.",
      "Worked extensively on Angular + NgRx for a large government-facing NOC management system in Dubai, handling store management, bug resolution, and API integration.",
      "Mentored a junior developer for ~2 months, assigning tasks and reviewing work."
    ]
  }
];
