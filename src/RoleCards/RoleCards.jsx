<<<<<<< HEAD
// RoleCards.jsx
import {
  FaHtml5,
  FaNode,
  FaAndroid,
  FaApple,
  FaGamepad,
  FaDocker,
  FaBrain,
  FaPaintBrush,
} from "react-icons/fa";
// import { FaHourglassHalf } from "react-icons/fa6";

const roles = [
  {
    name: "Frontend",
    description: "Design and Develop User Interfaces",
    icon: FaHtml5,
    gradient: "from-red-500 to-orange-500",
    hoverGradient: "from-red-600 to-orange-600",
    buttonColor: "text-red-500 hover:bg-red-500",
    difficulty: "Beginner",
  },
  {
    name: "Backend",
    description: "Power the Logic Behind Applications",
    icon: FaNode,
    gradient: "from-green-500 to-emerald-500",
    hoverGradient: "from-green-600 to-emerald-600",
    buttonColor: "text-green-600 hover:bg-green-500",
    difficulty: "Intermediate",
  },
  {
    name: "Android",
    description: "Build Native Android Apps",
    icon: FaAndroid,
    gradient: "from-green-600 to-lime-500",
    hoverGradient: "from-green-700 to-lime-600",
    buttonColor: "text-green-700 hover:bg-green-600",
    difficulty: "Intermediate",
  },
  {
    name: "iOS",
    description: "Craft Elegant iOS Experiences",
    icon: FaApple,
    gradient: "from-black to-gray-800",
    hoverGradient: "from-gray-900 to-gray-800",
    buttonColor: "text-gray-400 hover:bg-gray-900",
    difficulty: "Intermediate",
  },
  {
    name: "Game Developer",
    description: "Create Immersive Game Worlds",
    icon: FaGamepad,
    gradient: "from-purple-600 to-indigo-600",
    hoverGradient: "from-purple-700 to-indigo-700",
    buttonColor: "text-purple-600 hover:bg-purple-600",
    difficulty: "Advanced",
  },
  {
    name: "DevOps Engineer",
    description: "Automate and Integrate Systems",
    icon: FaDocker,
    gradient: "from-blue-600 to-sky-600",
    hoverGradient: "from-blue-700 to-sky-700",
    buttonColor: "text-blue-600 hover:bg-blue-600",
    difficulty: "Advanced",
  },
  {
    name: "AI & Data Scientist",
    description: "Dive into Data and AI Solutions",
    icon: FaBrain,
    gradient: "from-yellow-500 to-amber-500",
    hoverGradient: "from-yellow-600 to-amber-600",
    buttonColor: "text-yellow-600 hover:bg-yellow-500",
    difficulty: "Advanced",
  },
  {
    name: "UX Design",
    description: "Craft User-Centered Designs",
    icon: FaPaintBrush,
    gradient: "from-pink-500 to-rose-500",
    hoverGradient: "from-pink-600 to-rose-600",
    buttonColor: "text-pink-600 hover:bg-pink-500",
    difficulty: "Beginner",
  },
];

export default function RoleCard({ handleClickOpen }) {
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
    // <section className="relative py-24 bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
    //   {/* Decorative Backgrounds */}
    //   <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
    //   <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>

    //   <div className="relative z-10 container mx-auto px-6 lg:px-8">
    //     {/* Section Title */}
    //     <div className="text-center mb-20 animate-fade-in-up">
    //       <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8">
    //         <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
    //         Choose Your Role
    //       </div>
    //       <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-6 animate-text-shimmer">
    //         Pick a Career Path
    //       </h2>
    //       <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
    //         Explore different roles in tech and find your path to mastery.
    //       </p>
    //     </div>

    //     {/* Roles Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up animation-delay-300">
    //       {roles.map((role, index) => {
    //         const IconComponent = role.icon;
    //         return (
    //           <div
    //             key={role.name}
    //             className={`group relative bg-gradient-to-br ${role.gradient} rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden animate-fade-in-up`}
    //             style={{ animationDelay: `${index * 100}ms` }}
    //             onClick={() => handleClickOpen(`${role.name} Development`)}
    //           >
    //             {/* Background Icon */}
    //             <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
    //               <IconComponent size={120} className="text-white rotate-12" />
    //             </div>

    //             {/* Hover Gradient Overlay */}
    //             <div
    //               className={`absolute inset-0 ${role.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
    //             ></div>

    //             {/* Content */}
    //             <div className="relative z-10">
    //               <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
    //                 <IconComponent size={48} className="text-white" />
    //               </div>
    //               <h3 className="text-2xl font-bold text-white mb-3">
    //                 {role.name}
    //               </h3>
    //               <p className="text-white/80 text-sm mb-6 leading-relaxed">
    //                 {role.description}
    //               </p>
    //               <button
    //                 className={`w-full py-3 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white hover:text-gray-900 transform transition-all duration-300 hover:scale-105`}
    //               >
    //                 Start Quiz
    //                 <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-300">
    //                   →
    //                 </span>
    //               </button>
    //             </div>
    //           </div>
    //         );
    //       })}

    //       {/* Coming Soon Card */}
    //       <div className="group relative bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up">
    //         <div className="relative z-10 text-center">
    //           <div className="mb-6">
    //             <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto">
    //               <FaHourglassHalf size={24} className="text-white" />
    //             </div>
    //           </div>
    //           <h3 className="text-2xl font-bold text-white mb-3">
    //             More Roles Coming
    //           </h3>
    //           <p className="text-white/80 text-sm mb-6 leading-relaxed">
    //             Stay tuned for more exciting career paths and challenges.
    //           </p>
    //           <div className="py-3 px-6 bg-white/10 border border-white/20 rounded-xl font-semibold text-white/60 cursor-not-allowed">
    //             Stay Tuned
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="relative py-24 bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Elements */}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent)]"></div>
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
            Choose Your Role
          </div>

          <h2 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 mb-6 animate-text-shimmer">
            Pick a Career Path
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore different roles in tech and find your path to mastery.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-fade-in-up animation-delay-300">
          {roles.map((skill, index) => {
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
=======
import { FaHtml5 } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaHourglassHalf } from "react-icons/fa6";

export default function RoleCard({ handleClickOpen }) {
  return (
    <>
      <div className="overflow-hidden flex justify-center py-10">
        <div className="flex items-center w-full max-w-4xl">
          <div className="flex-grow h-0.5 bg-gray-500"></div>
          <div className="px-6 py-3 bg-gray-300 rounded-lg mx-4">
            <h1 className="text-4xl font-Cabin font-bold text-gray-800">
              Choose Your Role Path
            </h1>
          </div>
          <div className="flex-grow h-0.5 bg-gray-500"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-7 pb-10 max-w-full">
        <div className="overflow-hidden relative w-56 h-64 bg-red-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaHtml5
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Frontend</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Design and Develop User Interfaces
            </p>
          </div>
          <FaHtml5 style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-red-600 hover:bg-red-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Frontend Development")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-green-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaNode
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Backend</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Power the Logic Behind Applications
            </p>
          </div>
          <FaNode style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-green-600 hover:bg-green-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Backend Development")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-green-500 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaAndroid
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-6 -right-5 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Android</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Build Native Android Apps
            </p>
          </div>
          <FaAndroid
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-green-500 hover:bg-green-500 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Android Development")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-black rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaApple
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-9 -right-6 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">iOS</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Craft Elegant iOS Experiences
            </p>
          </div>
          <FaApple style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-black hover:bg-black hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("iOS Development")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-purple-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaGamepad
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-8 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">Game Developer</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Create Immersive Game Worlds
            </p>
          </div>
          <FaGamepad
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-purple-600 hover:bg-purple-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("Game Development")}
          >
            Next
          </button>
        </div>

        <div className="overflow-hidden relative w-56 h-64 bg-blue-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaDocker
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-0 -bottom-6 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">DevOps Engineer</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Automate and Integrate Systems
            </p>
          </div>
          <FaDocker
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-blue-600 hover:bg-blue-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("DevOps Engineer")}
          >
            Next
          </button>
        </div>

        <div className="overflow-hidden relative w-56 h-64 bg-yellow-600 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaBrain
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-10 -right-8 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">AI & Data Scientist</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Dive into Data and AI Solutions
            </p>
          </div>
          <FaBrain style={{ height: 53, width: 36 }} className="text-gray-50" />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-yellow-600 hover:bg-yellow-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("AI and Data Scientist")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-pink-500 rounded-2xl text-gray-50 flex flex-col justify-end items-center gap-2 pb-8 transition hover:-translate-y-4">
          <FaPaintBrush
            style={{ height: 100, width: 100 }}
            className="absolute opacity-30 -rotate-12 -bottom-5 -right-4 text-gray-50"
          />
          <div className="flex flex-col items-center">
            <p className="text-xl font-extrabold">UX Design</p>
            <p className="relative text-xs inline-block after:absolute after:content-[''] after:ml-2 after:top-1/2 after:bg-gray-200 after:w-12 after:h-0.5 before:absolute before:content-[''] before:-ml-14 before:top-1/2 before:bg-gray-200 before:w-12 before:h-0.5">
              Craft User-Centered Designs
            </p>
          </div>
          <FaPaintBrush
            style={{ height: 53, width: 36 }}
            className="text-gray-50"
          />
          <button
            className="z-10 duration-500 font-bold px-4 py-2 bg-gray-50 text-pink-500 hover:bg-pink-500 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => handleClickOpen("UX Design")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl text-gray-50 flex flex-col justify-center items-center gap-4 pt-6 transition hover:scale-105 shadow-lg">
          <div className="text-center">
            <p className="text-2xl font-extrabold">Coming Soon</p>
            <p className="text-sm font-light mt-2">
              Exciting new features are on their way!
            </p>
          </div>
          <FaHourglassHalf
            style={{ height: 60, width: 60 }}
            className="opacity-70 mt-4"
          />
          <div className="mt-auto mb-4">
            <button
              className="px-6 py-2 bg-gray-50 text-purple-600 hover:bg-purple-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
              onClick={() => alert("Stay tuned!")}
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </>
>>>>>>> f882a12a9e4ec7441301f8d78bb8330960f42074
  );
}
