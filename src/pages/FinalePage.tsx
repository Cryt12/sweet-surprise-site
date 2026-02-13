import React, { useEffect, useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";

const FinalePage: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
      <FloatingHearts />
      
      {/* Extra sparkle hearts */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute animate-sparkle text-rose-glow"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${10 + Math.random() * 14}px`,
            }}
          >
            ✨
          </span>
        ))}
      </div>

      <div className={`relative z-10 text-center max-w-lg mx-auto transition-all duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-7xl mb-8 block animate-pulse-soft">❤️</span>
        
        <h1 className="font-script text-5xl md:text-7xl text-foreground mb-8 leading-tight">
          I choose you.
        </h1>
        
        <div className="space-y-2 mb-8">
          <p className="text-xl md:text-2xl text-foreground/80 font-body">In good days.</p>
          <p className="text-xl md:text-2xl text-foreground/80 font-body">In hard days.</p>
          <p className="text-xl md:text-2xl text-foreground/80 font-body font-semibold">In all days.</p>
        </div>

        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-border/40 mt-10">
          <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed">
            Tomorrow, and every day after,
            <br />
            it's still you 🤍
          </p>
        </div>

        <div className="mt-12 space-y-2">
          <p className="text-sm text-muted-foreground/50 font-body">
            {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="text-xs text-muted-foreground/40 font-body">
            Made with love by someone who adores you 💗
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalePage;
