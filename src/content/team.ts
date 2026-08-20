import type { FacultyMember, TeamMember } from "./types";

export const faculty: FacultyMember[] = [
  {
    name: "Dr. Deepshika Yadav Ma'am",
    role: "Faculty",
    photo: "[SPARK-FACULTY-PHOTO]",
  },
];

export const executivePanel: TeamMember[] = [
  {
    id: "president",
    name: "Ashvini Adhikari",
    role: "President",
    description:
      "The President leads SPARK and works closely with all departments to plan and execute the society's initiatives. She helps set the direction for the team, coordinates activities and ensures everyone works toward SPARK's goals.",
    photo: "[SPARK-CORE-2026-2027-PRESIDENT-PHOTO]",
  },
  {
    id: "vice-president",
    name: "Pranjal Sharma",
    role: "Vice President",
    description:
      "The Vice President works alongside the President in managing the society and coordinating departments. She supports planning and execution while helping maintain smooth coordination across the team.",
    photo: "[SPARK-CORE-2026-2027-VICE-PRESIDENT-PHOTO]",
  },
  {
    id: "general-secretary",
    name: "Dhanya Manocha",
    role: "General Secretary",
    description:
      "The General Secretary handles day-to-day coordination, communication, planning and tracking of society activities and initiatives.",
    photo: "[SPARK-CORE-2026-2027-GENERAL-SECRETARY-PHOTO]",
  },
];