import { AiOutlineHtml5 } from "react-icons/ai";
<<<<<<< HEAD
import {
  FaCss3Alt,
  FaReact,
  FaJsSquare,
  FaDatabase,
  FaCuttlefish,
  FaNode,
  FaJava,
  FaPython,
  FaPhp,
  FaMicrosoft,
  FaRProject,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiKotlin } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

const SkillCard = ({ handleClickOpen }) => {
  const skills = [
    {
      name: "HTML",
      description: "Master the Foundation of Web Development",
      icon: AiOutlineHtml5,
      gradient: "from-orange-500 to-red-500",
      hoverGradient: "from-orange-600 to-red-600",
      shadowColor: "shadow-orange-500/25",
      hoverShadow: "group-hover:shadow-orange-500/40",
      buttonColor: "text-orange-500 hover:bg-orange-500",
      difficulty: "Beginner",
    },
    {
      name: "CSS",
      description: "Create Beautiful and Responsive Designs",
      icon: FaCss3Alt,
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600",
      shadowColor: "shadow-blue-500/25",
      hoverShadow: "group-hover:shadow-blue-500/40",
      buttonColor: "text-blue-500 hover:bg-blue-500",
      difficulty: "Beginner",
    },
    {
      name: "JavaScript",
      description: "Build Interactive and Dynamic Applications",
      icon: FaJsSquare,
      gradient: "from-yellow-400 to-orange-400",
      hoverGradient: "from-yellow-500 to-orange-500",
      shadowColor: "shadow-yellow-500/25",
      hoverShadow: "group-hover:shadow-yellow-500/40",
      buttonColor: "text-yellow-600 hover:bg-yellow-500",
      difficulty: "Intermediate",
    },
    {
      name: "React",
      description: "Master Modern Frontend Development",
      icon: FaReact,
      gradient: "from-cyan-400 to-blue-500",
      hoverGradient: "from-cyan-500 to-blue-600",
      shadowColor: "shadow-cyan-500/25",
      hoverShadow: "group-hover:shadow-cyan-500/40",
      buttonColor: "text-cyan-500 hover:bg-cyan-500",
      difficulty: "Intermediate",
    },
    {
      name: "Node.js",
      description: "Build Scalable Backend Applications",
      icon: FaNode,
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600",
      shadowColor: "shadow-green-500/25",
      hoverShadow: "group-hover:shadow-green-500/40",
      buttonColor: "text-green-600 hover:bg-green-500",
      difficulty: "Intermediate",
    },
    {
      name: "MongoDB",
      description: "Master NoSQL Database Management",
      icon: FaDatabase,
      gradient: "from-green-600 to-green-800",
      hoverGradient: "from-green-700 to-green-900",
      shadowColor: "shadow-green-600/25",
      hoverShadow: "group-hover:shadow-green-600/40",
      buttonColor: "text-green-700 hover:bg-green-600",
      difficulty: "Intermediate",
    },
    {
      name: "C Programming",
      description: "Learn System Programming Fundamentals",
      icon: FaCuttlefish,
      gradient: "from-slate-600 to-slate-800",
      hoverGradient: "from-slate-700 to-slate-900",
      shadowColor: "shadow-slate-600/25",
      hoverShadow: "group-hover:shadow-slate-600/40",
      buttonColor: "text-slate-700 hover:bg-slate-600",
      difficulty: "Advanced",
    },
    {
      name: "C++ Programming",
      description: "Master Object-Oriented Programming",
      icon: TbBrandCpp,
      gradient: "from-blue-600 to-indigo-700",
      hoverGradient: "from-blue-700 to-indigo-800",
      shadowColor: "shadow-blue-600/25",
      hoverShadow: "group-hover:shadow-blue-600/40",
      buttonColor: "text-blue-700 hover:bg-blue-600",
      difficulty: "Advanced",
    },
    {
      name: "Java Programming",
      description: "Enterprise Application Development",
      icon: FaJava,
      gradient: "from-red-500 to-orange-600",
      hoverGradient: "from-red-600 to-orange-700",
      shadowColor: "shadow-red-500/25",
      hoverShadow: "group-hover:shadow-red-500/40",
      buttonColor: "text-red-600 hover:bg-red-500",
      difficulty: "Intermediate",
    },
    {
      name: "Python Programming",
      description: "Data Science and AI Development",
      icon: FaPython,
      gradient: "from-blue-500 to-yellow-500",
      hoverGradient: "from-blue-600 to-yellow-600",
      shadowColor: "shadow-blue-500/25",
      hoverShadow: "group-hover:shadow-blue-500/40",
      buttonColor: "text-blue-600 hover:bg-blue-500",
      difficulty: "Beginner",
    },
    {
      name: "PHP",
      description: "Server-Side Web Development",
      icon: FaPhp,
      gradient: "from-purple-600 to-indigo-600",
      hoverGradient: "from-purple-700 to-indigo-700",
      shadowColor: "shadow-purple-600/25",
      hoverShadow: "group-hover:shadow-purple-600/40",
      buttonColor: "text-purple-600 hover:bg-purple-600",
      difficulty: "Intermediate",
    },
    {
      name: "Kotlin Programming",
      description: "Modern Android Development",
      icon: SiKotlin,
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-600 to-pink-600",
      shadowColor: "shadow-purple-500/25",
      hoverShadow: "group-hover:shadow-purple-500/40",
      buttonColor: "text-purple-600 hover:bg-purple-500",
      difficulty: "Intermediate",
    },
    {
      name: "Flutter Programming",
      description: "Cross-Platform Mobile Development",
      icon: RiFlutterFill,
      gradient: "from-sky-400 to-blue-500",
      hoverGradient: "from-sky-500 to-blue-600",
      shadowColor: "shadow-sky-500/25",
      hoverShadow: "group-hover:shadow-sky-500/40",
      buttonColor: "text-sky-600 hover:bg-sky-500",
      difficulty: "Intermediate",
    },
    {
      name: ".NET (C#)",
      description: "Microsoft Technology Stack",
      icon: FaMicrosoft,
      gradient: "from-blue-700 to-purple-700",
      hoverGradient: "from-blue-800 to-purple-800",
      shadowColor: "shadow-blue-700/25",
      hoverShadow: "group-hover:shadow-blue-700/40",
      buttonColor: "text-blue-700 hover:bg-blue-700",
      difficulty: "Advanced",
    },
    {
      name: "React Native",
      description: "Mobile App Development with React",
      icon: FaReact,
      gradient: "from-indigo-500 to-purple-600",
      hoverGradient: "from-indigo-600 to-purple-700",
      shadowColor: "shadow-indigo-500/25",
      hoverShadow: "group-hover:shadow-indigo-500/40",
      buttonColor: "text-indigo-600 hover:bg-indigo-500",
      difficulty: "Advanced",
    },
    {
      name: "R Language",
      description: "Statistical Computing and Data Analysis",
      icon: FaRProject,
      gradient: "from-teal-500 to-cyan-600",
      hoverGradient: "from-teal-600 to-cyan-700",
      shadowColor: "shadow-teal-500/25",
      hoverShadow: "group-hover:shadow-teal-500/40",
      buttonColor: "text-teal-600 hover:bg-teal-500",
      difficulty: "Advanced",
    },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-300 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
      case "Advanced":
        return "bg-red-500/20 text-red-300 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),rgba(255,255,255,0))]"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            Choose Your Technology
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6 animate-text-shimmer">
            Master Your Skills
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Select from our comprehensive collection of programming languages
            and technologies. Each quiz is designed to challenge and enhance
            your expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up animation-delay-300">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className={`group relative bg-gradient-to-br ${skill.gradient} rounded-3xl p-8 shadow-2xl ${skill.shadowColor} ${skill.hoverShadow} transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleClickOpen(skill.name)}
              >
                {/* Background Icon */}
                <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <IconComponent
                    size={120}
                    className="text-white transform rotate-12"
                  />
                </div>

                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Difficulty Badge */}
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border mb-4 ${getDifficultyColor(
                      skill.difficulty
                    )}`}
                  >
                    {skill.difficulty}
                  </div>

                  {/* Main Icon */}
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <IconComponent
                      size={48}
                      className="text-white drop-shadow-lg"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-white/80 text-sm mb-6 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {skill.description}
                  </p>

                  {/* Action Button */}
                  <button
                    className={`w-full py-3 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white hover:text-gray-900 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/30 group-hover:bg-white group-hover:text-gray-900`}
                  >
                    Start Quiz
                    <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}

          {/* Coming Soon Card */}
          <div className="group relative bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl p-8 shadow-2xl shadow-gray-600/25 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden animate-fade-in-up">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                More Coming Soon
              </h3>

              <p className="text-white/80 text-sm mb-6 leading-relaxed">
                We're constantly adding new technologies and frameworks to help
                you stay ahead.
              </p>

              <div className="py-3 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white/60 cursor-not-allowed">
                Stay Tuned
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillCard;
=======
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaCuttlefish } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { FaRProject } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaMicrosoft } from "react-icons/fa";

export default function SkillCard({ handleClickOpen }) {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-7 pb-10 max-w-full">
        <div className="overflow-hidden relative w-56 h-64 bg-orange-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <AiOutlineHtml5
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">HTML</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Test your HTML Knowledge
            </p>
          </div>
          <AiOutlineHtml5
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-orange-600 hover:bg-orange-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("HTML")}
          >
            Next
          </button>
        </div>

        {/* CSS Card */}
        <div className="overflow-hidden relative w-56 h-64 bg-blue-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaCss3Alt
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">CSS</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Master the Art of Styling with CSS
            </p>
          </div>
          <FaCss3Alt
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-blue-600 hover:bg-blue-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("CSS")}
          >
            Next
          </button>
        </div>

        {/* JavaScript Card */}
        <div className="overflow-hidden relative w-56 h-64 bg-yellow-500 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaJsSquare
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">JavaScript</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Test your JavaScript Skills
            </p>
          </div>
          <FaJsSquare
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-yellow-500 hover:bg-yellow-500 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("JavaScript")}
          >
            Next
          </button>
        </div>

        {/* React Card */}
        <div className="overflow-hidden relative w-56 h-64 bg-cyan-500 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaReact
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">React</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Dive into React and Build Dynamic UIs
            </p>
          </div>
          <FaReact style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-cyan-500 hover:bg-cyan-500 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("React")}
          >
            Next
          </button>
        </div>

        {/* Node.js Card */}
        <div className="overflow-hidden relative w-56 h-64 bg-green-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaNode
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Node.js</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Backend Development with Node.js
            </p>
          </div>
          <FaNode style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-green-600 hover:bg-green-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Node.js")}
          >
            Next
          </button>
        </div>

        {/* MongoDB Card */}
        <div className="overflow-hidden relative w-56 h-64 bg-green-800 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaDatabase
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">MongoDB</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              NoSQL Databases with MongoDB
            </p>
          </div>
          <FaDatabase
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-green-800 hover:bg-green-800 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("MongoDB")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-blue-900 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaCuttlefish
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30  -rotate-45 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">C Language</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Sharpen Your C Programming Skills
            </p>
          </div>
          <FaCuttlefish
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-blue-900 hover:bg-blue-900 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("C Programming")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-blue-700 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <TbBrandCpp
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">C++</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Enhance Your C++ Proficiency
            </p>
          </div>
          <TbBrandCpp
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-blue-700 hover:bg-blue-700 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("C++ Programming")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-red-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaJava
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-3 -right-5 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Java</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Dive Deep into Java Programming
            </p>
          </div>
          <FaJava style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-red-600 hover:bg-red-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Java Programming")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-yellow-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaPython
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Python</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Unlock Python’s Potential
            </p>
          </div>
          <FaPython
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-yellow-600 hover:bg-yellow-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Python Programming")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-indigo-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaPhp
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">PHP</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Build Dynamic Websites with PHP
            </p>
          </div>
          <FaPhp style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-indigo-600 hover:bg-indigo-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("PHP")}
          >
            Next
          </button>
        </div>

        <div className="overflow-hidden relative w-56 h-64 bg-purple-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <SiKotlin
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Kotlin</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Android Development with Kotlin
            </p>
          </div>
          <SiKotlin
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-purple-600 hover:bg-purple-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Kortlin Programming")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-blue-400 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <RiFlutterFill
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Flutter</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Test your Flutter Skills
            </p>
          </div>
          <RiFlutterFill
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-blue-400 hover:bg-blue-400 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Flutter Programming")}
          >
            Next
          </button>
        </div>

        {/* .NET using C# Card */}
        <div className="overflow-hidden relative w-56 h-64 bg-blue-900 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaMicrosoft
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">.NET (C#)</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Test your .NET (C#) Skills
            </p>
          </div>
          <FaMicrosoft
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-blue-900 hover:bg-blue-900 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen(".NET (C#)")}
          >
            Next
          </button>
        </div>

        {/* React Native Card */}
        <div className="overflow-hidden relative w-56 h-64 bg-indigo-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaReact
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">React Native</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Test your React Native Skills
            </p>
          </div>
          <FaReact style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-indigo-600 hover:bg-indigo-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("React Native")}
          >
            Next
          </button>
        </div>

        {/* R Language Card */}
        <div className="overflow-hidden relative w-56 h-64 bg-lightgreen-600 rounded-2xl text-gray-50 bg-cyan-700 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaRProject
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">R Language</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Test your R Language Skills
            </p>
          </div>
          <FaRProject
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 text-cyan-700 font-bold px-4 py-2 bg-gray-50 text-lightgreen-600 hover:bg-cyan-700 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("R Language")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-gray-500 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-3xl font-extrabold opacity-30">Coming Soon</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">New Feature</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Stay Tuned for Updates
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
>>>>>>> f882a12a9e4ec7441301f8d78bb8330960f42074
