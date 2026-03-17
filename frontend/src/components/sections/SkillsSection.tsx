import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Section from '../layout/Section';
import { portfolioConfig } from '@/config/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';

/**
 * Skills section with responsive grid of skill cards grouped by category
 * Displays Programming Languages, Frameworks & Libraries, and Tools & Technologies with subtle hover effects
 */
function SkillCard({
  title,
  skills,
  index,
}: {
  title: string;
  skills: string[];
  index: number;
}) {
  const { ref, isInView } = useInViewAnimation();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full border-border/50 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-display text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function SkillsSection() {
  const { ref: headerRef, isInView: headerInView } = useInViewAnimation();

  const categories = [
    { title: 'Programming Languages', skills: portfolioConfig.skills.programmingLanguages },
    { title: 'Frameworks & Libraries', skills: portfolioConfig.skills.frameworksLibraries },
    { title: 'Tools & Technologies', skills: portfolioConfig.skills.toolsTechnologies },
  ];

  return (
    <Section id="skills">
      <div className="space-y-16">
        {/* Section Title */}
        <div
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical expertise across multiple domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <SkillCard key={category.title} title={category.title} skills={category.skills} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
