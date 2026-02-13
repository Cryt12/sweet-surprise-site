import React from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
      <FloatingHearts />
      
      <div className="relative z-10 text-center max-w-md mx-auto">
        <div className="animate-fade-in-up">
          <span className="text-6xl mb-6 block animate-pulse-soft">💕</span>
        </div>
        
        <h1 className="font-script text-5xl md:text-6xl text-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          Hi love
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground font-body mb-2 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          I made this just for you.
        </p>
        
        <p className="text-base text-muted-foreground font-body mb-10 animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
          Ready for a small surprise? 🫶
        </p>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <button
            onClick={() => navigate("/tease")}
            className="bg-primary text-primary-foreground font-body font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-bounce-gentle"
          >
            Click if you love me 😌
          </button>
        </div>
      </div>

      <p className="absolute bottom-6 text-xs text-muted-foreground/60 font-body z-10">
        Made with love by someone who adores you 🤍
      </p>
    </div>
  );
};

export default LandingPage;
