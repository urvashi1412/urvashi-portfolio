import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioConfig } from '@/config/portfolio';

/**
 * Footer section with copyright and social links
 */
export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-colors"
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
              variant="ghost"
              size="icon"
              className="h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-colors"
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
              variant="ghost"
              size="icon"
              className="h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-colors"
              asChild
            >
              <a href={`mailto:${portfolioConfig.social.email}`} aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} {portfolioConfig.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
