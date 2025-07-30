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
  );
}
