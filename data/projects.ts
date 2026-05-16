export type Project = {
  name: string;
  domain: string;
  tags: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    name: "RTA e-NOC System",
    domain: "Dubai Infrastructure Clearance Platform",
    tags: ["Angular", "NgRx"],
    bullets: [
      "Owned ~1 year of frontend on a Dubai govt internal app, engineering NgRx store management, API integration, and backend data syncing for NOC infrastructure applications.",
      "Single-handedly resolved all frontend bugs for 4+ months after team reduction, independently maintaining majority of the frontend."
    ]
  },
  {
    name: "FretBox / InternBox",
    domain: "Hostel Management SaaS",
    tags: ["React", "Socket.io", "Redux", "SCSS"],
    bullets: [
      "Engineered a full real-time chat system from scratch, including file uploads, online/offline status, read receipts, and request flows.",
      "Identified and resolved numerous pre-existing bugs across the platform alongside active feature development."
    ]
  },
  {
    name: "Thrivent / Rightwise Prep",
    domain: "US Ed-Tech Portal",
    tags: ["React", "Vite", "SCSS"],
    bullets: [
      "Architected a comprehensive design system covering colors, typography, forms, modals, dashboards, sidebars, and auth flows.",
      "Spearheaded frontend alongside a senior lead and onboarded a junior intern into the workflow."
    ]
  },
  {
    name: "Smart Health Assist",
    domain: "Healthcare Platform",
    tags: ["React", "REST APIs"],
    bullets: [
      "Developed almost all UI pages for appointment booking, medicine purchase, and real-time patient monitoring.",
      "Built partner and nurse data entry flows with per-patient report storage for operational healthcare teams."
    ]
  },
  {
    name: "Amplify Infra",
    domain: "Construction Management App",
    tags: ["React", "Redux", "Google APIs"],
    bullets: [
      "Delivered GPS-based attendance verification, travel allowance tracking, and floor-wise portion planning features using Google APIs.",
      "Architected complex multi-role dynamic forms across a heavily legacy codebase."
    ]
  },
  {
    name: "Meal O'Clock",
    domain: "Tiffin Subscription Service",
    tags: ["Vanilla JS", "Razorpay"],
    bullets: [
      "Built end-to-end as one of two developers using no frameworks, from meal plan selection to subscription management.",
      "Delivered pause/resume logic across monthly, 3-month, and 6-month plans with Razorpay payment integration."
    ]
  },
  {
    name: "Vibhu",
    domain: "Internal Enterprise App",
    tags: ["React", "Redux", "SCSS"],
    bullets: [
      "First production React project, building the full auth system and core frontend foundations.",
      "Established a scalable 3-layer folder structure adopted by the team."
    ]
  }
];
