import type { SparkEvent, UpcomingEvents } from "./types";

export interface EventsHero {
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export const eventsHero: EventsHero = {
  eyebrow: "EVENTS",
  title: "Learn. Explore. Experience.",
  paragraphs: [
    "At SPARK, we believe learning doesn't have to be limited to classrooms and textbooks.",
    "We organise workshops, training sessions, webinars and other activities where students can learn something new and get hands-on experience."
  ]
};

export const pastEvents: SparkEvent[] = [
  {
    id: "event-01",
    title: "Financial Literacy Webinar 💰",
    date: "September 2025",
    description:
      "A session focused on basic financial knowledge and making better financial decisions.\n\nStudents explored topics like budgeting, savings, investments, mutual funds, loans, debt and fraud awareness.",
    topics: [],
    cover: "[SPARK-EVENT-01-COVER]",
    gallery: ["[SPARK-EVENT-01-GALLERY-01]", "[SPARK-EVENT-01-GALLERY-02]"],
  },
  {
    id: "event-02",
    title: "Hands-On Soldering Workshop 🔧",
    date: "September 2025",
    description:
      "A practical workshop for beginners where students learned about soldering, desoldering, safety and handling electronic components.\n\nStudents also got the opportunity to practise these skills themselves.",
    topics: [],
    cover: "[SPARK-EVENT-02-COVER]",
    gallery: ["[SPARK-EVENT-02-GALLERY-01]"],
  },
  {
    id: "event-03",
    title: "AR/VR Workshop 🥽",
    date: "March 2026",
    description:
      "An interactive workshop introducing students to Augmented Reality and Virtual Reality.\n\nThe workshop gave students a chance to go beyond simply using Snapchat AR filters and understand how they are actually built. It introduced students to Augmented Reality, its real-world applications and career opportunities, while giving students hands-on experience in building, testing and publishing their own AR projects. The session also offered insights into the AR industry and how these skills can be developed into future opportunities.\n\nThe participants even created their own AR filters using Lens Studio.",
    topics: [],
    cover: "[SPARK-EVENT-03-COVER]",
    gallery: ["[SPARK-EVENT-03-GALLERY-01]", "[SPARK-EVENT-03-GALLERY-02]"],
  },
];

export const upcoming: UpcomingEvents = {
  heading: "More workshops, events and learning opportunities are coming soon.",
  note: "Stay tuned! 👀",
};