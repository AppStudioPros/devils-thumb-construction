import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/CookieBanner";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ChatWidget from "@/components/ChatWidget";
import { JsonLd } from "@/components/JsonLd";
import {
  buildWebSiteSchema,
  buildOrganizationSchema,
  toGraph,
} from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Devils Thumb Construction | Colorado General Contractor",
    template: "%s | Devils Thumb Construction",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Devils Thumb Construction | Colorado General Contractor",
    description: siteConfig.description,
    images: [
      {
        url: "/images/mountain-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Devils Thumb Construction — Colorado Front Range construction company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devils Thumb Construction | Colorado General Contractor",
    description: siteConfig.description,
    images: ["/images/mountain-bg.jpg"],
  },
};

const siteSchema = toGraph(buildWebSiteSchema(), buildOrganizationSchema());

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <JsonLd data={siteSchema as Record<string, unknown>} />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <AccessibilityWidget />
        <ChatWidget />
      </body>
    </html>
  );
}
