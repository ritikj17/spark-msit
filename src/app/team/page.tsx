import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";
import { pages } from "@/content/pages";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return <PagePlaceholder meta={pages.team} />;
}