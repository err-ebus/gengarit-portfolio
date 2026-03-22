import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ParticleEffect = () => {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Keeps the parallax scroll effect
  const parallaxY = useTransform(scrollY, [0, 2000], [0, -400]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.5; // Extra height for parallax
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.type = Math.random() > 0.6 ? (Math.random() > 0.5 ? '0' : '1') : 'block';
        this.size = Math.random() * 8 + 6; 
        this.speedY = -(Math.random() * 1.2 + 0.3);
        this.opacity = Math.random() * 0.4 + 0.1;
        this.color = Math.random() > 0.1 ? '#dc2626' : '#52525b'; // Red or Zinc
      }
      update() {
        this.y += this.speedY;
        
        // Random horizontal jitter to represent "error"
        if (Math.random() > 0.98) {
          this.x += (Math.random() - 0.5) * 15;
        }

        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        
        if (this.type === 'block') {
          // Draw a small technical block/fragment
          const width = this.size * (Math.random() * 2 + 1);
          const height = Math.random() * 2 + 1;
          ctx.fillRect(this.x, this.y, width, height);
        } else {
          // Draw binary digit
          ctx.font = `bold ${this.size}px monospace`;
          ctx.fillText(this.type, this.x, this.y);
        }
        
        ctx.globalAlpha = 1;
      }
    }

    // Dynamic particle count based on screen width
    const particleCount = window.innerWidth < 768 ? 40 : 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full pointer-events-none z-50"
      style={{ y: parallaxY }}
    />
  );
};
