import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParticleEffect = () => {
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
        this.size = Math.random() * 3 + 1.5; // Visible size
        this.speedY = -(Math.random() * 0.4 + 0.1); // Drifts slowly upwards
        this.opacity = Math.random() * 0.6 + 0.4; // Bright base opacity
      }
      update() {
        this.y += this.speedY;
        // Reset to bottom if it floats off top
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${this.opacity})`;
        ctx.shadowBlur = 12; // Creates the red neon glow
        ctx.shadowColor = "rgba(239, 68, 68, 0.9)";
        ctx.fill();
      }
    }

    // 70 particles for a good density
    for (let i = 0; i < 70; i++) {
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
      className="fixed top-0 left-0 w-full pointer-events-none z-0"
      style={{ y: parallaxY }}
    />
  );
};

export default ParticleEffect;