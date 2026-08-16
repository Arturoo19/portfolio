import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <>
      <main id="main">
        <HeroSection />
        <ProjectsSection />
        <div className="site-flow">
          <ExperienceSection />
          <ServicesSection />
          <AboutSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
