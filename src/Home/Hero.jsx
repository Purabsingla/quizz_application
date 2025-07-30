import React from "react";
import Lottie from "lottie-react";
import { FaArrowRight } from "react-icons/fa";
import { VscTarget } from "react-icons/vsc";
import { IoSparklesOutline } from "react-icons/io5";
import { GoZap } from "react-icons/go";
import animationData from "../assets/HomePageAnimation2.json";

const Hero = ({ handleClick }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.4),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-violet-600/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-float-slow"></div>

      {/* Sparkle Effects */}
      <div className="absolute top-20 left-20 animate-pulse">
        <IoSparklesOutline className="w-6 h-6 text-blue-400/60" />
      </div>
      <div className="absolute top-40 right-32 animate-pulse animation-delay-1000">
        <GoZap className="w-5 h-5 text-purple-400/60" />
      </div>
      <div className="absolute bottom-32 left-1/3 animate-pulse animation-delay-2000">
        <VscTarget className="w-4 h-4 text-pink-400/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          {/* Enhanced Text Content */}
          <div className="text-container space-y-10 lg:pr-8">
            <div className="space-y-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium animate-glow">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                Interactive Learning Experience
                <IoSparklesOutline className="w-4 h-4 ml-2 text-blue-400" />
              </div>

              {/* Hero Title with Advanced Typography */}
              <div className="space-y-4">
                <h1 className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-[0.9] animate-text-shimmer">
                  Welcome to
                </h1>
                <div className="relative">
                  <h1 className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-[0.9] animate-gradient-x">
                    Skill Quiz
                  </h1>
                  <div className="absolute inset-0 text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-sm opacity-50 animate-gradient-x"></div>
                </div>
              </div>

              {/* Enhanced Description */}
              <p className="text-2xl lg:text-3xl text-slate-300 leading-relaxed max-w-2xl font-light animate-fade-in-up animation-delay-500">
                Master new skills and test your knowledge with our
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
                  {" "}
                  comprehensive quiz platform
                </span>
                . Choose from multiple languages and challenge yourself today.
              </p>
            </div>

            {/* Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-700">
              <button
                className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/40 transform transition-all duration-500 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 overflow-hidden"
                onClick={handleClick}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <span className="relative z-10">Get Started</span>
                <FaArrowRight className="relative z-10 ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />

                {/* Button Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
              </button>

              <button className="group inline-flex items-center justify-center px-10 py-5 text-xl font-semibold text-slate-300 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white/10 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20">
                <span className="group-hover:text-white transition-colors duration-300">
                  Learn More
                </span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap gap-6 pt-8 animate-fade-in-up animation-delay-1000">
              <div className="flex items-center space-x-3 text-slate-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Multiple Languages</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-500"></div>
                <span className="text-sm font-medium">Real-time Results</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-1000"></div>
                <span className="text-sm font-medium">Progress Tracking</span>
              </div>
            </div>
          </div>

          {/* Enhanced Animation Container */}
          <div className="animation-container flex items-center justify-center lg:justify-end animate-fade-in-up animation-delay-300">
            <div className="relative w-full max-w-2xl">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse-slow scale-110"></div>

              {/* Middle Ring */}
              <div className="absolute inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-spin-slow"></div>

              {/* Main Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Animation */}
                <div className="relative z-10 transform group-hover:scale-105 transition-transform duration-500">
                  <Lottie
                    animationData={animationData}
                    loop={true}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60 animate-bounce animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
