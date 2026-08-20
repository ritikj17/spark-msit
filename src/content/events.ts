import type { SparkEvent, UpcomingEvents } from "./types";

export const pastEvents: SparkEvent[] = [
  {
    id: "event-01",
    title: "Financial Literacy Webinar",
    date: "September 2025",
    description:
      "A session focused on basic financial knowledge and making better financial decisions.",
    topics: [
      "budgeting",
      "savings",
      "investments",
      "mutual funds",
      "loans",
      "debt",
      "fraud awareness",
    ],
    cover: "[SPARK-EVENT-01-COVER]",
    gallery: ["[SPARK-EVENT-01-GALLERY-01]", "[SPARK-EVENT-01-GALLERY-02]"],
  },
  {
    id: "event-02",
    title: "Hands-On Soldering Workshop",
    date: "September 2025",
    description:
      "A practical workshop for beginners where students learned about soldering, desoldering, safety and handling electronic components. Students also had the opportunity to practise these skills themselves.",
    topics: ["soldering", "desoldering", "safety", "handling electronic components"],
    cover: "[SPARK-EVENT-02-COVER]",
    gallery: ["[SPARK-EVENT-02-GALLERY-01]"],
  },
  {
    id: "event-03",
    title: "AR/VR Workshop",
    date: "March 2026",
    description:
      "An interactive workshop introducing students to Augmented Reality and Virtual Reality.",
    topics: [
      "how AR works",
      "real-world applications",
      "career opportunities",
      "building AR projects",
      "testing AR projects",
      "publishing AR projects",
      "the AR industry",
      "Lens Studio",
    ],
    cover: "[SPARK-EVENT-03-COVER]",
    gallery: ["[SPARK-EVENT-03-GALLERY-01]", "[SPARK-EVENT-03-GALLERY-02]"],
  },
];

export const upcoming: UpcomingEvents = {
  heading: "More workshops, events and learning opportunities are coming soon.",
  note: "Stay tuned! 👀",
};