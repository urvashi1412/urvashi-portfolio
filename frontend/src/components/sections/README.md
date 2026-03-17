# Portfolio Sections

This directory contains all the main section components for the portfolio website.

## Components Overview

- **HeroSection.tsx**: Landing section with name, role, tagline, resume download button, and social links
- **AboutSection.tsx**: Professional introduction, skills list, and education details
- **ProjectsSection.tsx**: Project cards with descriptions, technologies, GitHub links, and live demo buttons
- **SkillsSection.tsx**: Categorized skills (Frontend, Backend, Tools) with progress bars
- **ContactSection.tsx**: Contact form with validation and backend submission
- **FooterSection.tsx**: Footer with copyright, attribution, and social links

## Editing Content

To update portfolio content (personal info, projects, skills, etc.), edit the centralized configuration file:
`frontend/src/config/portfolio.ts`

This keeps content separate from UI components for easier maintenance.

## Animations

Sections use the `useInViewAnimation` hook for scroll-triggered entrance animations. The animations are subtle and performance-friendly, using IntersectionObserver to detect when elements enter the viewport.
