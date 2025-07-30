import SkillCard from "../SkillCards/SkillCard";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import RoleCard from "../RoleCards/RoleCards";
import Modal from "../Components/Modal";
import "../CSS/Footer.css";
export default function Home({ setMode, setLanguage }) {
  const nextSectionRef = useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickOpen = (name) => {
    setLanguage(name);
    console.log(name);
    setOpen(true);
  };

  const handleClick = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const QuizButton = ({ label }) => (
    <button
      className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50 overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
      onClick={() => {
        setMode(label);
        navigate("/instruction");
      }}
    >
      <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
      <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
      <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
      <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
      <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
      <p className="z-10">{label}</p>
    </button>
  );

  return (
    <>
      <Hero handleClick={handleClick} />
      <SkillCard handleClickOpen={handleClickOpen} />
      <RoleCard handleClickOpen={handleClickOpen} />
      <footer className="w-full bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 text-center py-6">
        <p className="text-sm text-gray-400 tracking-wide">
          © 2025 <span className="font-semibold text-white">Quiz-App</span>. All
          rights reserved.
        </p>
      </footer>

      <Modal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
