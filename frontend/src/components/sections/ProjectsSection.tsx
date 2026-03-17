import { ExternalLink, Github, Loader2, AlertCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Section from '../layout/Section';
import { portfolioConfig } from '@/config/portfolio';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { useGithubRepos } from '@/hooks/useGithubRepos';
import type { GithubRepository } from '@/types/github';

/**
 * Projects section displaying all projects (resume projects and GitHub repositories) under a single heading with unified grid layout
 */

interface ResumeProjectCardProps {
  project: {
    title: string;
    subtitle: string;
    technologies: string[];
    description: string[];
    githubUrl?: string;
  };
  index: number;
}

function ResumeProjectCard({ project, index }: ResumeProjectCardProps) {
  const { ref, isInView } = useInViewAnimation();

  // Check if GitHub URL is valid (not empty or whitespace)
  const hasGithubUrl = project.githubUrl && project.githubUrl.trim().length > 0;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full flex flex-col border-border/50 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-display">{project.title}</CardTitle>
          {project.subtitle && (
            <CardDescription className="text-sm font-medium text-accent">
              {project.subtitle}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="flex-1 space-y-4">
          {/* Technologies */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        {/* GitHub Button - Only shown when githubUrl is present */}
        {hasGithubUrl && (
          <CardFooter className="pt-4">
            <Button variant="default" size="sm" className="gap-2 w-full" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

interface GithubProjectCardProps {
  repo: GithubRepository;
  index: number;
}

function GithubProjectCard({ repo, index }: GithubProjectCardProps) {
  const { ref, isInView } = useInViewAnimation();

  // Derive technologies from GitHub data
  const technologies: string[] = [];
  
  // Add topics if available
  if (repo.topics && repo.topics.length > 0) {
    technologies.push(...repo.topics.slice(0, 5));
  }
  
  // Add primary language if available and not already in topics
  if (repo.language && !technologies.some(t => t.toLowerCase() === repo.language?.toLowerCase())) {
    technologies.unshift(repo.language);
  }

  // Fallback if no tech data
  const displayTechnologies = technologies.length > 0 ? technologies : ['Code'];

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="h-full flex flex-col border-border/50 hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-2xl font-display">{repo.name}</CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {repo.description || 'A project showcasing development skills and best practices.'}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {displayTechnologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex gap-3 pt-4">
          <Button variant="default" size="sm" className="gap-2 flex-1" asChild>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>
          {repo.homepage && (
            <Button variant="outline" size="sm" className="gap-2 flex-1" asChild>
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref: headerRef, isInView: headerInView } = useInViewAnimation();
  const { data: repos, isLoading, isError, error } = useGithubRepos(portfolioConfig.githubUsername);

  // Repos to exclude from GitHub cards
  const excludedRepos = ['Laundry-Management-System', 'Taskflow', 'forage-midas', 'daytona'];

  // Sort repos to prioritize specific projects and filter out excluded repos
  const sortedRepos = repos ? [...repos]
    .filter(repo => !excludedRepos.includes(repo.name))
    .sort((a, b) => {
      const aIndex = portfolioConfig.priorityRepos.indexOf(a.name);
      const bIndex = portfolioConfig.priorityRepos.indexOf(b.name);
      
      // Both are priority repos
      if (aIndex !== -1 && bIndex !== -1) {
        return aIndex - bIndex;
      }
      
      // Only a is priority
      if (aIndex !== -1) return -1;
      
      // Only b is priority
      if (bIndex !== -1) return 1;
      
      // Neither is priority, sort by updated date
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    }) : [];

  // Filter out the 3rd, 4th, and 5th GitHub repos (indices 2, 3, and 4)
  const filteredRepos = sortedRepos.filter((_, index) => index !== 2 && index !== 3 && index !== 4);

  // Calculate total number of resume projects for index offset
  const resumeProjectsCount = portfolioConfig.projects.resumeProjects.length;

  return (
    <Section id="projects" className="bg-secondary/30">
      <div className="space-y-12">
        {/* Single Section Title */}
        <div
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-foreground">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recent projects showcasing my skills and experience
          </p>
        </div>

        {/* Loading State for GitHub */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading projects from GitHub...</p>
          </div>
        )}

        {/* Error State for GitHub */}
        {isError && (
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Failed to load projects from GitHub. {error instanceof Error ? error.message : 'Please try again later.'}
            </AlertDescription>
          </Alert>
        )}

        {/* Unified Projects Grid - Resume Projects + GitHub Repos */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resume Projects */}
            {portfolioConfig.projects.resumeProjects.map((project, index) => (
              <ResumeProjectCard key={project.title} project={project} index={index} />
            ))}

            {/* GitHub Repository Cards */}
            {!isError && filteredRepos.map((repo, index) => (
              <GithubProjectCard key={repo.id} repo={repo} index={index + resumeProjectsCount} />
            ))}
          </div>
        )}

        {/* Empty State - Only if no resume projects and no GitHub repos */}
        {!isLoading && !isError && filteredRepos.length === 0 && portfolioConfig.projects.resumeProjects.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground text-base">No projects found.</p>
          </div>
        )}
      </div>
    </Section>
  );
}
