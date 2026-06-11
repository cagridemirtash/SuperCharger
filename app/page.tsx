import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectSection } from "@/components/project-section";
import { SkillsSection } from "@/components/skills-section";
import { PersonalBrandSection } from "@/components/personal-brand-section";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <PersonalBrandSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
