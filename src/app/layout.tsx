import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkipLink } from "@/components/layout/SkipLink";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const brandTitle = `${site.name}`;

export const metadata: Metadata = {
  title: {
    default: `${brandTitle} — ${site.tagline}`,
    template: `%s | ${brandTitle}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    site.name,
    site.nameLong,
    site.institution.shortName,
    site.institution.name,
    "student research",
    "student innovation",
    "student society",
  ],
  openGraph: {
    title: brandTitle,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: brandTitle,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b0d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-base font-sans text-ink">
        <SkipLink />
        <Navbar />
        <main id="main" className="flex-1 pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}