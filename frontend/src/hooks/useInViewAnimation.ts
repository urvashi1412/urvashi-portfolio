import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered entrance animations with reduced-motion support
 * Uses IntersectionObserver to detect when elements enter the viewport
 * Returns a ref to attach to the element and an isInView state
 * 
 * Usage:
 * const { ref, isInView } = useInViewAnimation();
 * <div ref={ref} className={isInView ? 'animate-in' : 'opacity-0'}>...</div>
 */
export function useInViewAnimation(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If user prefers reduced motion, show immediately
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    // Create IntersectionObserver to watch when element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger animation when element is visible
        if (entry.isIntersecting) {
          setIsInView(true);
          // Once animated, stop observing (animation only happens once)
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return { ref, isInView };
}
