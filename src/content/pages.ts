import type { PageId, PageMeta } from "./types";

export const pages: Record<PageId, PageMeta> = {
  home: {
    title: "SPARK",
    eyebrow: "01 // HOME",
    description: "Where Curiosity Meets Creation.",
    notice:
      "The immersive SPARK universe hero (3D) arrives in Stage 3. Navigation, layout and the design system are live.",
  },
  about: {
    title: "What is SPARK?",
    eyebrow: "02 // ABOUT",
    description: "The research, innovation and learning story behind SPARK.",
    notice: "The full About experience ships in a later stage.",
  },
  events: {
    title: "Learn. Explore. Experience.",
    eyebrow: "03 // EVENTS",
    description: "Workshops, training sessions, webinars and hands-on learning.",
    notice: "The event timeline and archive ship in a later stage.",
  },
  team: {
    title: "Team",
    eyebrow: "04 // TEAM",
    description: "Faculty, executive panel and departments behind SPARK.",
    notice: "The team and department experience ships in a later stage.",
  },
  contact: {
    title: "Want to Know More About SPARK?",
    eyebrow: "05 // CONTACT",
    description: "Questions, ideas, collaboration — reach out to SPARK.",
    notice: "Social cards, location and the inquiry form ship in a later stage.",
  },
};