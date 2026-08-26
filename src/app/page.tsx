import type { Metadata } from "next";
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import Testimonials from '@/components/home/Testimonials';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import { JsonLd } from "@/components/JsonLd";
import { buildWebPageSchema, toGraph } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/seo/config";

export const metadata: Metadata = {
  title: "Devil's Thumb Construction | Colorado General Contractor",
  description:
    "Devil's Thumb Construction — residential and light commercial general contractor serving Arvada, Denver, Boulder, Golden, and the Colorado Front Range. Custom homes, remodels, ADUs, concrete, and more.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Devil's Thumb Construction | Colorado General Contractor",
    description:
      "Built Right. Built Local. Residential and light commercial construction across the Colorado Front Range — custom homes, remodels, garages, ADUs, concrete, and more.",
    url: "/",
  },
};

const homeSchema = toGraph(
  buildWebPageSchema({
    type: "WebPage",
    id: `${siteConfig.url}/#webpage`,
    url: `${siteConfig.url}/`,
    name: "Devil's Thumb Construction | Colorado General Contractor",
    description:
      "Residential and light commercial general contractor serving Arvada, Denver, Boulder, Golden, and the Colorado Front Range.",
  })
);

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema as Record<string, unknown>} />
      <Hero />
      <AboutSection />
      <Testimonials />
      <ServicesOverview />
      <ProjectsPreview />
    </>
  );
}
