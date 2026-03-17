import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Section from '../layout/Section';
import { portfolioConfig } from '@/config/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

/**
 * Certifications section displaying professional certifications with issuer and date
 * Responsive card layout with subtle animations
 */

function CertificationCard({
  cert,
  index,
}: {
  cert: typeof portfolioConfig.certifications[0];
  index: number;
}) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="h-full border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 space-y-2">
              <CardTitle className="text-xl font-display text-foreground leading-tight">
                {cert.name}
              </CardTitle>
              <CardDescription className="text-base">
                {cert.issuer}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground font-medium">
            Issued: {cert.date}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CertificationsSection() {
  const { ref: headerRef, isInView: headerInView } = useInViewAnimation();

  return (
    <Section id="certifications" className="bg-secondary/30">
      <div className="space-y-16">
        {/* Section Title */}
        <div
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioConfig.certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
