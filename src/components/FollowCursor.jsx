import React, { useEffect, useRef } from "react";

export const FollowCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-8 h-8 pointer-events-none z-[9999] hidden lg:block"
      style={{
        border: "2px solid rgba(59, 130, 246, 0.5)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        backdropFilter: "blur(2px)",
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
      }}
    />
  );
};
