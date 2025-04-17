
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="scroll-smooth font-inter">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
