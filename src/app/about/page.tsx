import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";
import { pages } from "@/content/pages";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <PagePlaceholder meta={pages.about} />;
}