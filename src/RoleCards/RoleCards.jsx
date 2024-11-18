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
            onClick={() => handleClickOpen("Frontend")}
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
            onClick={() => handleClickOpen("Backend")}
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
            onClick={() => handleClickOpen("Android")}
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
            onClick={() => handleClickOpen("iOS")}
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
            onClick={() => handleClickOpen("GameDeveloper")}
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
            onClick={() => handleClickOpen("DevOps")}
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
            onClick={() => handleClickOpen("AI")}
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
            onClick={() => handleClickOpen("UXDesign")}
          >
            Next
          </button>
        </div>
        <div className="overflow-hidden relative w-56 h-64 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl text-gray-50 flex flex-col justify-center items-center gap-4 transition hover:scale-105 shadow-lg">
          <FaHourglassHalf
            style={{ height: 80, width: 80 }}
            className="opacity-70 animate-pulse"
          />
          <div className="text-center">
            <p className="text-2xl font-extrabold">Coming Soon</p>
            <p className="text-sm font-light mt-2">
              Exciting new features are on their way!
            </p>
          </div>
          <button
            className="mt-4 px-6 py-2 bg-gray-50 text-purple-600 hover:bg-purple-600 hover:text-gray-50 rounded-full shadow-md transition-colors ease-in-out"
            onClick={() => alert("Stay tuned!")}
          >
            Notify Me
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
  );
}
