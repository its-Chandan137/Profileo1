export type SkillCategory = {
  number: string;
  name: string;
  skills: string[];
};

export const skills: SkillCategory[] = [
  {
    number: "CATEGORY 01",
    name: "Frontend",
    skills: ["JavaScript", "React", "HTML", "CSS", "SCSS", "Bootstrap", "Tailwind"]
  },
  {
    number: "CATEGORY 02",
    name: "Frameworks",
    skills: ["Angular"]
  },
  {
    number: "CATEGORY 03",
    name: "State Management",
    skills: ["Redux", "NgRx"]
  },
  {
    number: "CATEGORY 04",
    name: "Real-Time",
    skills: ["Socket.io", "WebSocket"]
  },
  {
    number: "CATEGORY 05",
    name: "Tools & Others",
    skills: ["Git", "Vite", "REST APIs", "Google APIs", "Razorpay"]
  }
];
