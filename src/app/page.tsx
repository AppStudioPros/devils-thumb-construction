import Hero from '@/components/home/Hero';
import Testimonials from '@/components/home/Testimonials';
import ServicesOverview from '@/components/home/ServicesOverview';
import ProjectsPreview from '@/components/home/ProjectsPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Testimonials />
      <ProjectsPreview />
    </>
  );
}
