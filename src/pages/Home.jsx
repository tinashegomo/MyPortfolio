import HeroSection from '../components/sections/HeroSection';
import SkillsSection from '../components/sections/SkillsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <FeaturedProjects />
      <AboutSection />
      <ContactSection />
    </>
  );
}
