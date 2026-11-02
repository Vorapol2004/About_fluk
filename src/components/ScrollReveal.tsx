import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, keep it visible (smooth scroll feel)
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, []);

  const getDirectionClasses = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0';
    switch (direction) {
      case 'up':
        return 'opacity-0 translate-y-10';
      case 'down':
        return 'opacity-0 -translate-y-10';
      case 'left':
        return 'opacity-0 translate-x-10';
      case 'right':
        return 'opacity-0 -translate-x-10';
      case 'none':
      default:
        return 'opacity-0 scale-95';
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: '800ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`transition-all ${getDirectionClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
