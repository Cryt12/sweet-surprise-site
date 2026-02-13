import React from "react";

const FloatingHearts: React.FC = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${4 + Math.random() * 4}s`,
    size: `${14 + Math.random() * 20}px`,
    opacity: 0.3 + Math.random() * 0.5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute animate-float-up text-primary"
          style={{
            left: heart.left,
            bottom: "-20px",
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
        >
          💕
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
