import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import Testimonials from '@/components/home/Testimonials';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProjectsPreview from '@/components/home/ProjectsPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Testimonials />
      <ServicesOverview />
      <ProjectsPreview />
    </>
  );
}
