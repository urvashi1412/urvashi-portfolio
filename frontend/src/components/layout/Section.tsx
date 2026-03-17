import { ReactNode } from 'react';

/**
 * Reusable section wrapper component
 * Provides consistent spacing, max-width container, and anchor handling
 */
interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export default function Section({ id, children, className = '', containerClassName = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
