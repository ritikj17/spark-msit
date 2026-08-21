/*
 * SPARK content model.
 *
 * These interfaces are the single contract between the content layer and the
 * UI. Every component must consume content through these shapes so that a
 * headless CMS/API can later replace the local TypeScript modules without
 * touching UI code.
 */

export type SocialPlatform = "instagram" | "whatsapp" | "linkedin";

export interface SocialLink {
  label: string;
  url: string;
}

export interface Institution {
  name: string;
  shortName: string;
  address: string;
}

export interface SiteConfig {
  name: string;
  nameLong: string;
  tagline: string;
  description: string;
  institution: Institution;
  socials: Record<SocialPlatform, SocialLink>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  items: NavItem[];
  cta: NavItem;
}

export type PageId = "home" | "about" | "events" | "team" | "contact";

export interface PageMeta {
  title: string;
  eyebrow: string;
  description: string;
  notice: string;
}

export type AssetToken = string;

export interface FacultyMember {
  name: string;
  role: string;
  photo: AssetToken;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description?: string;
  photo: AssetToken;
}

export type MemberStatus = "active" | "pending";

export interface DepartmentMember {
  name: string | null;
  role: string | null;
  status: MemberStatus;
  photo: AssetToken | null;
}

export interface Department {
  id: string;
  name: string;
  description: string;
  members: DepartmentMember[];
}

export interface SparkEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  topics: string[];
  cover: AssetToken;
  gallery: AssetToken[];
}

export interface UpcomingEvents {
  heading: string;
  note: string;
}

export interface ContactFormConfig {
  heading: string;
  intro: string;
  submitLabel: string;
}

export interface ContactConfig {
  heroTitle: string;
  heroQuestions: string[];
  heroInvitation: string;
  connectHeading: string;
  visitHeading: string;
  form: ContactFormConfig;
  closing: {
    idea: string;
    mantra: string;
  };
}

export interface WhatWeDoItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}