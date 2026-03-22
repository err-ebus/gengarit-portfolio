import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FollowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Detect if the mouse is currently hovering over any interactive element
      const target = e.target;
      const isClickable = target.closest("a, button, input, textarea, [role='button']");
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Framer Motion variants to control the morphological shift
  const variants = {
    default: {
      x: mousePosition.x - 16, // Centers the 32x32px circle
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: "rgba(220, 38, 38, 0)", // Transparent inside
      borderColor: "rgba(220, 38, 38, 0.4)", // Red-600 border
      borderRadius: "50%", // Circle shape
      boxShadow: "0 0 10px rgba(220, 38, 38, 0.15)",
    },
    hover: {
      x: mousePosition.x - 10, // Centers the 20x20px block
      y: mousePosition.y - 10,
      width: 20,
      height: 20,
      backgroundColor: "rgba(239, 68, 68, 1)", // Solid Error Red
      borderColor: "rgba(239, 68, 68, 1)", 
      borderRadius: "0%", // Snaps to a sharp terminal block shape
      boxShadow: "0 0 20px rgba(239, 68, 68, 0.8)",
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block border-2"
      variants={variants}
      animate={isHovered ? "hover" : "default"}
      transition={{
        // Spring physics for movement makes it feel buttery and responsive
        x: { type: "spring", stiffness: 700, damping: 30, mass: 0.5 },
        y: { type: "spring", stiffness: 700, damping: 30, mass: 0.5 },
        // Linear tween for the shape transition makes the "snap" feel mechanical
        default: { duration: 0.15 }
      }}
    />
  );
};