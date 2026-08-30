import type { FacultyMember, TeamMember, Department } from "./types";

// ============================================================================
// TEAM IMAGE INSERTION INSTRUCTIONS:
// To add an image for any member:
// 1. Put the image inside the folder: /public/assets/team/
//    (for example: /public/assets/team/ashvini-adhikari.jpg)
// 2. Change the `photo` field below from "[SPARK-...]" to:
//    photo: "/assets/team/ashvini-adhikari.jpg"
// If no image is provided yet, keep it as "[SPARK-...]" or null.
// ============================================================================

export const faculty: FacultyMember = {
  name: "Dr. Deepshika Yadav Ma'am",
  role: "Faculty Team",
  photo: "[SPARK-CORE-FACULTY-DR-DEEPSHIKA-YADAV]",
};

export const executivePanel: TeamMember[] = [
  {
    id: "president",
    name: "Ashvini Adhikari",
    role: "President",
    description:
      "The President leads SPARK and works closely with all the departments to plan and execute the society's initiatives. She helps set the direction for the team, coordinates different activities and ensures that everyone works together towards the goals of SPARK. With her strong leadership, confidence and ability to take initiative, she keeps the team motivated and brings ideas together to turn them into meaningful initiatives.",
    photo: "[SPARK-CORE-PRESIDENT-ASHVINI-ADHIKARI]",
  },
  {
    id: "vice-president",
    name: "Pranjal Sharma",
    role: "Vice President",
    description:
      "The Vice President works alongside the President in managing the society and coordinating its different departments. She supports the planning and execution of initiatives and helps ensure smooth coordination across the team. With her proactive approach, reliability and strong coordination skills, she plays an important role in keeping the team organised and helping things move forward smoothly.",
    photo: "[SPARK-CORE-VICE-PRESIDENT-PRANJAL-SHARMA]",
  },
  {
    id: "general-secretary",
    name: "Dhanya Manocha",
    role: "General Secretary",
    description:
      "The General Secretary takes care of the day-to-day coordination of SPARK. She manages communication between different teams, helps with planning and keeps track of the society's activities and initiatives. Her strong organisational skills, attention to detail and responsible approach help keep the team well-connected and ensure that everything stays on track.",
    photo: "[SPARK-CORE-GENERAL-SECRETARY-DHANYA-MANOCHA]",
  },
];

export const departments: Department[] = [
  {
    id: "research",
    name: "🔬 Research",
    description:
      "The Research team encourages students to explore new ideas, ask questions and take up research projects. The team helps students understand the research process and provides guidance as they work on their ideas.",
    members: [
      {
        name: "Palak Gupta",
        role: "Research Head",
        status: "active",
        photo: "[SPARK-DEPT-RESEARCH-HEAD-PALAK-GUPTA]",
      },
      {
        name: "Manaswin Kath",
        role: "Research Deputy Head",
        status: "active",
        photo: "[SPARK-DEPT-RESEARCH-DEPUTY-MANASWIN-KATH]",
      },
      {
        name: "Aaditya Rai",
        role: "Research Coordinator",
        status: "active",
        photo: "[SPARK-DEPT-RESEARCH-COORDINATOR-AADITYA-RAI]",
      },
    ],
  },
  {
    id: "publication-documentation",
    name: "📝 Publication & Documentation",
    description:
      "The Publication & Documentation team works on recording and presenting the work done by SPARK. From reports and articles to research-related content, the team makes sure the society's activities and achievements are properly documented and shared.",
    members: [
      {
        name: "Nitya Bharadwaj",
        role: "Executive Head",
        status: "active",
        photo: "[SPARK-DEPT-PUB-HEAD-NITYA-BHARADWAJ]",
      },
      {
        name: "Deputy Head",
        role: "Deputy Head",
        status: "pending",
        photo: null,
      },
    ],
  },
  {
    id: "workshop-training",
    name: "🎓 Workshop",
    description:
      "The Workshop team plans and organises workshops, training sessions and interactive learning activities. The department gives students opportunities to learn new skills, explore different areas and gain practical experience beyond academics.",
    members: [
      {
        name: "Aalia Ali",
        role: "Executive Head",
        status: "active",
        photo: "[SPARK-DEPT-WORKSHOP-HEAD-AALIA-ALI]",
      },
      {
        name: "Anushka",
        role: "Deputy Head",
        status: "active",
        photo: "[SPARK-DEPT-WORKSHOP-DEPUTY-ANUSHKA]",
      },
    ],
  },
  {
    id: "technical-projects",
    name: "💻 Tech",
    description:
      "The Tech team handles the technical side of SPARK. From digital platforms and technical requirements to providing support for different activities, the team helps keep the technical side of the society running smoothly.",
    members: [
      {
        name: "Mudit",
        role: "Executive Head",
        status: "active",
        photo: "[SPARK-DEPT-TECH-HEAD-MUDIT]",
      },
      {
        name: "Ritik Jha",
        role: "Deputy Head",
        status: "active",
        photo: "[SPARK-DEPT-TECH-DEPUTY-RITIK-JHA]",
      },
    ],
  },
  {
    id: "pr-marketing",
    name: "📢 PR, Marketing & Outreach",
    description:
      "The PR, Marketing & Outreach team focuses on communication, promotion and building connections. The team helps SPARK reach more students, create collaborations and make sure its initiatives reach the right audience.",
    members: [
      {
        name: "Sumit Kumar",
        role: "Executive Head",
        status: "active",
        photo: "[SPARK-DEPT-PR-HEAD-SUMIT-KUMAR]",
      },
      {
        name: "Guransh Singh",
        role: "Deputy Head",
        status: "active",
        photo: "[SPARK-DEPT-PR-DEPUTY-GURANSH-SINGH]",
      },
    ],
  },
  {
    id: "event-management",
    name: "🎉 Event Management",
    description:
      "The Event Management team takes care of planning and executing SPARK's events. From coordinating with different departments to managing things during the event, the team works to make every event organised and successful.",
    members: [
      {
        name: "Reet Rathore",
        role: "Executive Head",
        status: "active",
        photo: "[SPARK-DEPT-EVENT-HEAD-REET-RATHORE]",
      },
      {
        name: "Varun Hooda",
        role: "Deputy Head",
        status: "active",
        photo: "[SPARK-DEPT-EVENT-DEPUTY-VARUN-HOODA]",
      },
    ],
  },
  {
    id: "design-videography",
    name: "🎨 Design & Videography",
    description:
      "The Design & Videography team handles the visual side of SPARK. From posters and social media creatives to photography and videography, the team helps bring SPARK's events and initiatives to life through engaging visual content.",
    members: [
      {
        name: "Utkarsh Gaur",
        role: "Executive Head",
        status: "active",
        photo: "[SPARK-DEPT-DESIGN-HEAD-UTKARSH-GAUR]",
      },
      {
        name: "Divyanshi",
        role: "Deputy Head",
        status: "active",
        photo: "[SPARK-DEPT-DESIGN-DEPUTY-DIVYANSHI]",
      },
    ],
  },
];
