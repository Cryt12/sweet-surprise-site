import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

const messages = [
  "I love how you make my bad days lighter. ☀️",
  "You feel like home to me. 🏡",
  "Even on quiet days, you're my favorite thought. 💭",
  "I'm grateful for you—always. 🌸",
];

const MessagesPage: React.FC = () => {
  const navigate = useNavigate();
  const [revealed, setRevealed] = useState(0);

  const handleReveal = () => {
    if (revealed < messages.length) {
      setRevealed(revealed + 1);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
      <FloatingHearts />
      
      <div className="relative z-10 text-center max-w-md mx-auto w-full">
        <div className="animate-fade-in-up mb-4">
          <span className="text-4xl block">🌷</span>
        </div>

        <h2 className="font-script text-3xl md:text-4xl text-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          Some things I want you to know...
        </h2>

        <div className="space-y-4 mb-10 min-h-[200px]">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i < revealed
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"
              }`}
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 shadow-md border border-border/50">
                <p className="text-foreground font-body text-base md:text-lg leading-relaxed">
                  "{msg}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {revealed < messages.length ? (
          <button
            onClick={handleReveal}
            className="bg-primary text-primary-foreground font-body font-semibold text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 animate-bounce-gentle"
          >
            {revealed === 0 ? "Tap to reveal 💌" : "Next 💕"}
          </button>
        ) : (
          <div className="animate-fade-in-up">
            <button
              onClick={() => navigate("/finale")}
              className="bg-primary text-primary-foreground font-body font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              One last thing… ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;
