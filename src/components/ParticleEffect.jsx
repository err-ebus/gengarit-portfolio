import React from "react";
import "./ParticleEffect.css";

const PARTICLE_COUNT = 100;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const ParticleEffect = () => (
  <div className="particle-container">
    {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
      const left = randomBetween(0, 100);
      const top = randomBetween(0, 100);
      const delay = randomBetween(0, 30);
      const duration = randomBetween(20, 40);
      const size = randomBetween(6, 12);
      return (
        <div
          className="circle-container"
          key={i}
          style={{
            left: `${left}vw`,
            top: `${top}vh`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div className="circle" />
        </div>
      );
    })}
  </div>
);

export default ParticleEffect;
