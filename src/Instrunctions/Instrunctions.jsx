import Button from "@mui/material/Button";
import { useContext, useEffect, useState } from "react";
import "../CSS/Loader.css";
import Quiz from "../Questions/MCQ";
import axios from "axios";
import Finish from "../FinishPage/FinishPage";
import { Context } from "../context/CreateContext";

import { Play, BookOpen, Clock, Target, Award } from "lucide-react";

export default function Instruction() {
  const { quizData } = useContext(Context);
  const { mode, language } = quizData;
  console.log(mode, language);
  let Data = {
    question: mode === "Easy" ? 7 : mode === "Intermediate" ? 6 : 5,
    total: mode === "Easy" ? 70 : mode === "Intermediate" ? 60 : 50,
  };
  const [modeData, setModeData] = useState({});
  const [page, setPage] = useState(0);
  const [Points, setPoints] = useState(0);
  const DETA = {
    title: language,
    mode: mode === "Intermediate" ? "Medium" : mode,
  };
  console.log(DETA);
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/getdatabytitle", DETA)
      .then((response) => {
        console.log(response.data.Data.modes);
        setModeData(response.data.Data.modes);
      })
      .catch((error) => console.log(error));
  }, []);

  const HandleClick = () => {
    console.log(page + 1);
    setPage(page + 1);
  };
  const HandlePoints = () => {
    setPoints(Points + 10);
  };

  const getModeIcon = (mode) => {
    switch (mode.toLowerCase()) {
      case "easy":
        return <Target className="w-5 h-5 text-green-400" />;
      case "intermediate":
        return <BookOpen className="w-5 h-5 text-yellow-400" />;
      case "hard":
        return <Award className="w-5 h-5 text-red-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-blue-400" />;
    }
  };

  const getModeColor = (mode) => {
    switch (mode.toLowerCase()) {
      case "easy":
        return "from-green-500 to-emerald-500";
      case "intermediate":
        return "from-yellow-500 to-orange-500";
      case "hard":
        return "from-red-500 to-pink-500";
      default:
        return "from-blue-500 to-purple-500";
    }
  };

  if (page === 1)
    return (
      <Quiz
        language={language}
        Data={modeData}
        mode={mode}
        ques={Data.question}
        HandlePoints={HandlePoints}
        HandleClick={HandleClick}
      />
    );

  if (page === 2)
    return (
      <Finish
        Points={Points}
        total={Data.total}
        mode={mode}
        language={language}
        HandleClick={HandleClick}
      />
    );

  return (
    <>
      {page === 0 && mode && language ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center p-4">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-violet-600/20 rounded-full blur-3xl animate-float-delayed"></div>

          {/* Main Container */}
          <div className="relative z-10 w-full max-w-2xl">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up">
              {/* Background Pattern */}
              <div className="absolute inset-0 rounded-3xl opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
              </div>

              {/* Header Section */}
              <div className="relative z-10 text-center mb-12 animate-fade-in-up animation-delay-200">
                {/* Title */}
                <h1 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-8 animate-text-shimmer">
                  SKILL QUIZ
                </h1>

                {/* Ready Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                  Ready to Start
                </div>
              </div>

              {/* Quiz Details */}
              <div className="relative z-10 space-y-6 mb-12 animate-fade-in-up animation-delay-400">
                {/* Selected Topic */}
                <div className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium">
                          Quiz Topic
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {language}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Selected Mode */}
                <div className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${getModeColor(
                          mode
                        )} rounded-xl flex items-center justify-center`}
                      >
                        {getModeIcon(mode)}
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium">
                          Difficulty Mode
                        </p>
                        <p className="text-2xl font-bold text-white capitalize">
                          {mode}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quiz Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium">
                          Total Questions
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {Data.question}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-400 text-sm font-medium">
                          Total Score
                        </p>
                        <p className="text-2xl font-bold text-white">
                          {Data.total}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Button */}
              <div className="relative z-10 text-center animate-fade-in-up animation-delay-600">
                <button
                  className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/40 transform transition-all duration-500 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400/50 overflow-hidden"
                  onClick={HandleClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <Play className="relative z-10 mr-4 w-8 h-8 group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="relative z-10">Start Quiz</span>

                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
                </button>

                {/* Estimated Time */}
                <p className="text-slate-400 text-sm mt-6 animate-fade-in-up animation-delay-800">
                  Estimated time: {Math.ceil(Data.question * 1.5)} minutes
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60 animate-bounce animation-delay-1000"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="cube-loader mb-6">
            <div className="cube-top"></div>
            <div className="cube-wrapper">
              <span style={{ "--i": 0 }} className="cube-span"></span>
              <span style={{ "--i": 1 }} className="cube-span"></span>
              <span style={{ "--i": 2 }} className="cube-span"></span>
              <span style={{ "--i": 3 }} className="cube-span"></span>
            </div>
          </div>
          <h1 className="text-xl font-bold">Loading...</h1>
        </div>
      )}
    </>
  );
}
