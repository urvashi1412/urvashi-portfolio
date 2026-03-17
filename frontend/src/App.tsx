import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ContactSection from './components/sections/ContactSection';
import FooterSection from './components/sections/FooterSection';
import StickyNavbar from './components/layout/StickyNavbar';

/**
 * Main App component - Single-page portfolio layout with corporate design
 * Renders all sections in order with smooth scroll navigation including new Certifications section
 */
function App() {
  return (
    <div className="min-h-screen">
      {/* Sticky navigation bar for smooth scrolling between sections */}
      <StickyNavbar />
      
      {/* Main content sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Footer with copyright and social links */}
      <FooterSection />
    </div>
  );
}

export default App;
