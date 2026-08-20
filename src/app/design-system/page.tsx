import type { Metadata } from "next";
import { ColorsSection } from "@/components/dev/ColorsSection";
import { DevHeader } from "@/components/dev/DevHeader";
import { MotionSection } from "@/components/dev/MotionSection";
import { StatesSection } from "@/components/dev/StatesSection";
import { TypographySection } from "@/components/dev/TypographySection";
import { UiSection } from "@/components/dev/UiSection";

export const metadata: Metadata = {
  title: "Design System (internal)",
  robots: { index: false, follow: false },
};

/**
 * Temporary internal design-system showcase. NOT a production page and NOT
 * linked from navigation. Used to verify the SPARK system before it
 * propagates across Home, About, Events, Team and Contact.
 */
export default function DesignSystemPage() {
  return (
    <>
      <DevHeader />
      <TypographySection />
      <ColorsSection />
      <UiSection />
      <StatesSection />
      <MotionSection />
    </>
  );
}