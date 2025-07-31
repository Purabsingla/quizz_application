import SkillCard from "../SkillCards/SkillCard";
import { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import RoleCard from "../RoleCards/RoleCards";
import Modal from "../Components/Modal";
import "../CSS/Footer.css";
export default function Home() {
  const nextSectionRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

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
