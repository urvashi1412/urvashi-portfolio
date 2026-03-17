import { CheckCircle2, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Section from '../layout/Section';
import { portfolioConfig } from '@/config/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

/**
 * About section with short intro, strengths bullets, core technologies, and optional additional details
 * Displays professional summary card suitable for recruiters
 */
export default function AboutSection() {
  const { ref: headerRef, isInView: headerInView } = useInViewAnimation();
  const { ref: contentRef, isInView: contentInView } = useInViewAnimation();

  const additionalDetails = portfolioConfig.about.additionalDetails || [];
  const hasAdditionalDetails = additionalDetails.length > 0;

  return (
    <Section id="about" className="bg-secondary/30">
      <div className="space-y-16">
        {/* Section Title */}
        <div
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Card className="border-border/50 shadow-sm">
            <CardContent className="p-8 md:p-12 space-y-10">
              {/* Introduction */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold font-display text-foreground">Introduction</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {portfolioConfig.about.introduction}
                </p>
              </div>

              {/* Strengths */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold font-display text-foreground">Key Strengths</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {portfolioConfig.about.strengths.map((strength) => (
                    <div key={strength} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-base text-foreground">{strength}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Skills */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold font-display text-foreground">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {portfolioConfig.about.coreSkills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium border border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Additional Details - Only render when array has items */}
              {hasAdditionalDetails && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold font-display text-foreground">Additional Details</h3>
                  <div className="space-y-3">
                    {additionalDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-base text-muted-foreground leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
