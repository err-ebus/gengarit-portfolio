import { useEffect, useRef } from 'react';

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      // Set initial state
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(30px)';
      ref.current.style.transition = 'all 0.6s ease-out';
      
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
};
