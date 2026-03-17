import { Download, ArrowRight, Linkedin, Github, Mail } from 'lucide-react';
import { useMemo } from 'react';
import { Button } from '@/components/ui/button';
import Section from '../layout/Section';
import { portfolioConfig } from '@/config/portfolio';

/**
 * Hero section with two-column layout: text left, circular profile photo right
 * Includes Download Resume and View Projects CTAs with subtle entrance animation
 */
export default function HeroSection() {
  const handleViewProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Session-stable cache-busting for profile photo
  // Initialized once per page load to ensure URL stability during session
  const profilePhotoUrl = useMemo(
    () => `${portfolioConfig.profilePhotoPath}?v=${Date.now()}`,
    []
  );

  return (
    <Section id="hero" className="min-h-screen flex items-center pt-20 md:pt-24">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8 animate-slide-up order-2 lg:order-1">
          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-display text-foreground leading-tight">
            {portfolioConfig.fullName}
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
            Software Developer
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Building creative and scalable solutions that make a difference
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <Button size="lg" className="gap-2 text-base px-8" asChild>
              <a href={portfolioConfig.resumePath} download aria-label="Download Resume">
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8" asChild>
              <a href="#projects" onClick={handleViewProjects} aria-label="View Projects">
                View Projects
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href={portfolioConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-11 w-11 hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a href={`mailto:${portfolioConfig.social.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right Column - Profile Photo */}
        <div className="flex justify-center lg:justify-end animate-fade-in order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <img
              src={profilePhotoUrl}
              alt={portfolioConfig.fullName}
              className="relative w-full h-full rounded-full object-cover border-4 border-background shadow-xl"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
