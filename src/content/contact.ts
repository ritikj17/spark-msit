import type { SocialPlatform, SocialLink } from "./types";

export interface ContactHero {
  eyebrow: string;
  title: string;
  questions: string[];
  invitation: string;
}

export interface ContactClosing {
  idea: string;
  mantra: string;
}

export const contactHero: ContactHero = {
  eyebrow: "CONTACT US",
  title: "Want to Know More About SPARK?",
  questions: [
    "Have a question?",
    "Want to join us?",
    "Interested in collaborating with SPARK?"
  ],
  invitation: "Feel free to reach out to us."
};

export const contactSocials: Record<SocialPlatform, SocialLink> = {
  instagram: {
    label: "@spark_msit",
    url: "https://www.instagram.com/spark_msit?igsh=MThhdms4b3FqcnRmdg==",
  },
  whatsapp: {
    label: "Join our WhatsApp Community",
    url: "https://chat.whatsapp.com/DpOVkyFP2aT44XXhSHmgXa?s=sh&p=a&ilr=1",
  },
  linkedin: {
    label: "SPARK MSIT",
    url: "https://www.linkedin.com/company/spark-msit/",
  },
};

export const contactLocation = {
  institution: "Maharaja Surajmal Institute of Technology",
  address: "C-4, Janakpuri, New Delhi",
};

export const contactClosing: ContactClosing = {
  idea: "Have an idea? We'd love to hear it.",
  mantra: "SPARK — Research. Collaborate. Discover."
};