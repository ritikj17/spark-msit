export interface AboutConfig {
  hero: {
    eyebrow: string;
    title: string;
  };
  whatIsSpark: {
    heading: string;
    paragraphs: string[];
  };
  quote: {
    line1: string;
    line2: string;
  };
  vision: {
    heading: string;
    description: string;
  };
  aim: {
    heading: string;
    points: string[];
  };
  closing: {
    line1: string;
    line2: string;
    cta: string;
  };
}

export const aboutContent: AboutConfig = {
  hero: {
    eyebrow: "ABOUT SPARK",
    title: "Curiosity is where it begins.",
  },
  whatIsSpark: {
    heading: "What is SPARK?",
    paragraphs: [
      "SPARK — Student Platform for Advancement, Research & Knowledge is a student-driven society at Maharaja Surajmal Institute of Technology focused on research, innovation and learning.",
      "We want to create a space where students can explore their ideas, work on projects, learn new skills and connect with people who share similar interests.",
      "Through workshops, training sessions, research activities, events and collaborations, SPARK encourages students to go beyond their regular academics and explore what they can create."
    ],
  },
  quote: {
    line1: "Research doesn't always start with a big idea.",
    line2: "Sometimes, it starts with a simple question or curiosity.",
  },
  vision: {
    heading: "Our Vision",
    description: "To build a strong culture of research, innovation and collaboration among students at MSIT.",
  },
  aim: {
    heading: "What We Aim To Do",
    points: [
      "Encourage students to explore research.",
      "Help students work on their ideas and projects.",
      "Provide opportunities to learn new skills.",
      "Connect students with mentors and peers.",
      "Organise workshops, events and training sessions.",
      "Encourage students to document and showcase their work."
    ],
  },
  closing: {
    line1: "You don't need to know everything to get started.",
    line2: "You just need to be curious.",
    cta: "FIND YOUR SPARK →",
  },
};
