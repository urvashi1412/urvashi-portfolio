import { GraduationCap } from 'lucide-react';
import Section from '../layout/Section';
import { portfolioConfig } from '@/config/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

/**
 * Education section with vertical timeline layout displaying multiple education entries
 * Responsive design with timeline markers and staggered animations
 */

function EducationItem({ 
  edu, 
  index 
}: { 
  edu: typeof portfolioConfig.education[0]; 
  index: number;
}) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline Marker */}
      <div className="absolute left-0 top-0 translate-x-[calc(-2rem-1px)] md:translate-x-[calc(-3rem-1px)] w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
        <GraduationCap className="h-6 w-6 text-primary-foreground" />
      </div>

      {/* Education Content */}
      <div className="space-y-3">
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-bold font-display text-foreground">
            {edu.degree}
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground font-medium">
            {edu.institution}
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-base text-muted-foreground">
            <span>{edu.period}</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-semibold text-primary">{edu.score}</span>
          </div>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          {edu.description}
        </p>
      </div>
    </div>
  );
}

export default function EducationSection() {
  const { ref: headerRef, isInView: headerInView } = useInViewAnimation();

  return (
    <Section id="education">
      <div className="space-y-16">
        {/* Section Title */}
        <div
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 md:pl-12 border-l-2 border-primary/30 space-y-12">
            {portfolioConfig.education.map((edu, index) => (
              <EducationItem key={index} edu={edu} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
