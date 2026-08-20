import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";
import { pages } from "@/content/pages";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return <PagePlaceholder meta={pages.events} />;
}