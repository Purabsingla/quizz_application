import React, { useContext, useEffect } from "react";
import { X, Zap, Target, Flame } from "lucide-react";
import { Context } from "../context/CreateContext";
import { useNavigate } from "react-router-dom";

const Modal = ({ open, onClose, selectedSkill = "Programming" }) => {
  const { setQuizData } = useContext(Context);
  const navigate = useNavigate();
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose, open]);

  if (!open) return null;

  const difficultyLevels = [
    {
      name: "Easy",
      description: "Perfect for beginners and quick reviews",
      icon: Target,
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600",
      shadowColor: "shadow-green-500/25",
      hoverShadow: "group-hover:shadow-green-500/40",
      questions: "10-15 questions",
      time: "5-8 minutes",
    },
    {
      name: "Intermediate",
      description: "Challenge yourself with moderate complexity",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-500",
      hoverGradient: "from-yellow-600 to-orange-600",
      shadowColor: "shadow-yellow-500/25",
      hoverShadow: "group-hover:shadow-yellow-500/40",
      questions: "15-20 questions",
      time: "10-15 minutes",
    },
    {
      name: "Hard",
      description: "Expert level questions for advanced users",
      icon: Flame,
      gradient: "from-red-500 to-pink-500",
      hoverGradient: "from-red-600 to-pink-600",
      shadowColor: "shadow-red-500/25",
      hoverShadow: "group-hover:shadow-red-500/40",
      questions: "20-25 questions",
      time: "15-20 minutes",
    },
  ];

  const HandleClick = (mode) => {
    setQuizData((prev) => ({ ...prev, mode: mode }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4 animate-fade-in-up">
      {/* Background overlay with click to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border border-white/10 text-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition-all duration-500 animate-fade-in-up animation-delay-200">
        {/* Background Elements */}
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] rounded-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.15),rgba(255,255,255,0))] rounded-3xl"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <X size={20} />
        </button>

        {/* Header Section */}
        <div className="relative z-10 text-center mb-8">
          {/* Skill Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            {selectedSkill} Quiz
          </div>

          {/* Title */}
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-3 animate-text-shimmer">
            Select Difficulty
          </h2>

          {/* Description */}
          <p className="text-slate-300 leading-relaxed">
            Choose your challenge level and test your knowledge with carefully
            crafted questions.
          </p>
        </div>

        {/* Difficulty Buttons */}
        <div className="relative z-10 space-y-4 mb-6">
          {difficultyLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <button
                key={level.name}
                onClick={() => {
                  console.log(`${level.name} selected for ${selectedSkill}`);
                  HandleClick(level.name);
                  navigate("/instruction");
                  onClose();
                }}
                className={`group relative w-full p-5 bg-gradient-to-r ${level.gradient} rounded-2xl shadow-xl ${level.shadowColor} ${level.hoverShadow} transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/20 animate-fade-in-up`}
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                {/* Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${level.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex items-center">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-bold text-white">
                        {level.name}
                      </h3>
                      <div className="text-xs text-white/80 font-medium">
                        {level.time}
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-2 group-hover:text-white/90 transition-colors duration-300">
                      {level.description}
                    </p>
                    <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      {level.questions}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 ml-3">
                    <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-300">
                      <span className="text-white text-sm">→</span>
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="relative z-10 text-center">
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-300 hover:underline focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-2 py-1"
          >
            Maybe later
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60 animate-pulse animation-delay-1000"></div>
      </div>
    </div>
  );
};

export default Modal;
