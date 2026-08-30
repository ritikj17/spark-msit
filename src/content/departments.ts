import type { Department } from "./types";

export const departments: Department[] = [
  {
    id: "research",
    name: "Research",
    description:
      "The Research team encourages students to explore new ideas, ask questions and take up research projects. The team helps students understand the research process and provides guidance as they work on their ideas.",
    members: [
      { name: "Palak Gupta", role: "Research Head", status: "active", photo: "[SPARK-RESEARCH-HEAD-PHOTO]" },
      { name: "Manaswin Kath", role: "Research Deputy Head", status: "active", photo: "[SPARK-RESEARCH-DEPUTY-HEAD-PHOTO]" },
      { name: "Aaditya Rai", role: "Research Coordinator", status: "active", photo: "[SPARK-RESEARCH-COORDINATOR-PHOTO]" },
    ],
  },
  {
    id: "publication-documentation",
    name: "Publication & Documentation",
    description:
      "The Publication & Documentation team works on recording and presenting the work done by SPARK. From reports and articles to research-related content, the team makes sure the society's activities and achievements are properly documented and shared.",
    members: [
      { name: "Nitya Bharadwaj", role: "Executive Head", status: "active", photo: "[SPARK-PUBLICATION-HEAD-PHOTO]" },
      { name: null, role: "Deputy Head", status: "pending", photo: null },
    ],
  },
  {
    id: "workshop",
    name: "Workshop",
    description:
      "The Workshop team plans and organises workshops, training sessions and interactive learning activities. The department gives students opportunities to learn new skills, explore different areas and gain practical experience beyond academics.",
    members: [
      { name: "Aalia Ali", role: "Executive Head", status: "active", photo: "[SPARK-WORKSHOP-HEAD-PHOTO]" },
      { name: "Anushka", role: "Deputy Head", status: "active", photo: "[SPARK-WORKSHOP-DEPUTY-HEAD-PHOTO]" },
    ],
  },
  {
    id: "tech",
    name: "Tech",
    description:
      "The Tech team handles the technical side of SPARK. From digital platforms and technical requirements to providing support for different activities, the team helps keep the technical side of the society running smoothly.",
    members: [
      { name: "Mudit", role: "Executive Head", status: "active", photo: "[SPARK-TECH-HEAD-PHOTO]" },
      { name: "Ritik Jha", role: "Deputy Head", status: "active", photo: "[SPARK-TECH-DEPUTY-HEAD-PHOTO]" },
    ],
  },
  {
    id: "pr-marketing-outreach",
    name: "PR, Marketing & Outreach",
    description:
      "The PR, Marketing & Outreach team focuses on communication, promotion and building connections. The team helps SPARK reach more students, create collaborations and make sure its initiatives reach the right audience.",
    members: [
      { name: "Sumit Kumar", role: "Executive Head", status: "active", photo: "[SPARK-PR-HEAD-PHOTO]" },
      { name: "Guransh Singh", role: "Deputy Head", status: "active", photo: "[SPARK-PR-DEPUTY-HEAD-PHOTO]" },
    ],
  },
  {
    id: "event-management",
    name: "Event Management",
    description:
      "The Event Management team takes care of planning and executing SPARK's events. From coordinating with different departments to managing things during the event, the team works to make every event organised and successful.",
    members: [
      { name: "Reet Rathore", role: "Executive Head", status: "active", photo: "[SPARK-EVENT-MGMT-HEAD-PHOTO]" },
      { name: "Varun Hooda", role: "Deputy Head", status: "active", photo: "[SPARK-EVENT-MGMT-DEPUTY-HEAD-PHOTO]" },
    ],
  },
  {
    id: "design-videography",
    name: "Design & Videography",
    description:
      "The Design & Videography team handles the visual side of SPARK. From posters and social media creatives to photography and videography, the team helps bring SPARK's events and initiatives to life through engaging visual content.",
    members: [
      { name: "Utkarsh Gaur", role: "Executive Head", status: "active", photo: "[SPARK-DESIGN-HEAD-PHOTO]" },
      { name: "Divyanshi", role: "Deputy Head", status: "active", photo: "[SPARK-DESIGN-DEPUTY-HEAD-PHOTO]" },
    ],
  },
];