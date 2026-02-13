import React from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

const TeasePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
      <FloatingHearts />
      
      <div className="relative z-10 text-center max-w-md mx-auto">
        <div className="animate-fade-in-up">
          <span className="text-5xl mb-6 block">🤔</span>
        </div>
        
        <h1 className="font-script text-4xl md:text-5xl text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          Are you sure?
        </h1>
        
        <div className="space-y-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
          <p className="text-lg text-muted-foreground font-body">
            This comes with unlimited love,
          </p>
          <p className="text-lg text-muted-foreground font-body">
            random kulit moments,
          </p>
          <p className="text-lg text-muted-foreground font-body">
            and someone who will always choose you 🤍
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}>
          <button
            onClick={() => navigate("/messages")}
            className="bg-primary text-primary-foreground font-body font-semibold text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Yes, I'm sure 🥰
          </button>
          <button
            onClick={() => navigate("/messages")}
            className="bg-secondary text-secondary-foreground font-body font-semibold text-base px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Yes, but make it cute 😆
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeasePage;
