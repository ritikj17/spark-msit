import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";
import { pages } from "@/content/pages";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <PagePlaceholder meta={pages.contact} />;
}