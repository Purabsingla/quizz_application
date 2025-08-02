import { Link } from "react-router-dom";
import { Trophy, Award, Star, Home, RotateCcw, Target } from "lucide-react";
export default function Finish({ Points, total, mode, language, HandleClick }) {
  const percentage = Math.round((Points / total) * 100);

  const getPerformanceData = () => {
    if (percentage >= 90) {
      return {
        title: "Outstanding! 🏆",
        message: "You're a true expert!",
        color: "from-yellow-400 to-orange-500",
        bgColor: "from-yellow-500/20 to-orange-500/20",
        borderColor: "border-yellow-400/30",
        icon: Trophy,
      };
    } else if (percentage >= 75) {
      return {
        title: "Excellent Work! 🌟",
        message: "You've mastered the fundamentals!",
        color: "from-green-400 to-emerald-500",
        bgColor: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-400/30",
        icon: Award,
      };
    } else if (percentage >= 60) {
      return {
        title: "Good Job! 👍",
        message: "You're on the right track!",
        color: "from-blue-400 to-cyan-500",
        bgColor: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-400/30",
        icon: Star,
      };
    } else {
      return {
        title: "Keep Learning! 📚",
        message: "Practice makes perfect!",
        color: "from-purple-400 to-pink-500",
        bgColor: "from-purple-500/20 to-pink-500/20",
        borderColor: "border-purple-400/30",
        icon: Target,
      };
    }
  };

  const performance = getPerformanceData();
  const PerformanceIcon = performance.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center p-4">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:linear-gradient(to_bottom,#000_70%,transparent_110%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-violet-600/20 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-2xl">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up">
          {/* Background Pattern */}
          <div className="absolute inset-0 rounded-3xl opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
          </div>

          {/* Header Section */}
          <div className="relative z-10 text-center mb-12 animate-fade-in-up animation-delay-200">
            {/* Performance Badge */}
            <div
              className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${performance.bgColor} backdrop-blur-sm border ${performance.borderColor} rounded-full text-white text-sm font-medium mb-6`}
            >
              <PerformanceIcon className="w-5 h-5 mr-3" />
              Quiz Completed
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-4 animate-text-shimmer">
              {performance.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-300 mb-8">{performance.message}</p>
          </div>

          {/* Score Display */}
          <div className="relative z-10 mb-12 animate-fade-in-up animation-delay-400">
            <div
              className={`bg-gradient-to-br ${performance.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${performance.borderColor} hover:border-opacity-50 transition-all duration-300`}
            >
              {/* Score Circle */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-32 h-32">
                  {/* Background Circle */}
                  <svg
                    className="w-32 h-32 transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${(percentage / 100) * 251.2} 251.2`}
                      className="transition-all duration-1000 ease-out"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Percentage Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {percentage}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Score Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Your Score</p>
                      <p className="text-2xl font-bold text-white">
                        {Points} / {total}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${performance.color} rounded-lg flex items-center justify-center`}
                    >
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Difficulty</p>
                      <p className="text-2xl font-bold text-white capitalize">
                        {mode}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Technology</p>
                      <p className="text-2xl font-bold text-white">
                        {language}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link to="/">
              <button
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/40 transform transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 overflow-hidden"
                onClick={HandleClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <Home className="relative z-10 mr-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="relative z-10">Return to Home</span>

                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
              </button>
            </Link>

            <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-300 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20">
              <RotateCcw className="mr-3 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span className="group-hover:text-white transition-colors duration-300">
                Try Again
              </span>
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60 animate-bounce animation-delay-1000"></div>
        </div>
      </div>
    </div>
  );
}
