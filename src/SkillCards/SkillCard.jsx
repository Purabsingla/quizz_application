import { AiOutlineHtml5 } from "react-icons/ai";
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
