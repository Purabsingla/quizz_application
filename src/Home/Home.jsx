import SkillCard from "../SkillCards/SkillCard";
<<<<<<< HEAD
=======
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
>>>>>>> f882a12a9e4ec7441301f8d78bb8330960f42074
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import RoleCard from "../RoleCards/RoleCards";
<<<<<<< HEAD
import Modal from "../Components/Modal";
=======
>>>>>>> f882a12a9e4ec7441301f8d78bb8330960f42074
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
<<<<<<< HEAD
=======

  const handleClose = () => {
    setOpen(false);
  };
>>>>>>> f882a12a9e4ec7441301f8d78bb8330960f42074
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
<<<<<<< HEAD
      <SkillCard handleClickOpen={handleClickOpen} />
      <RoleCard handleClickOpen={handleClickOpen} />
      <footer className="w-full bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 text-center py-6">
        <p className="text-sm text-gray-400 tracking-wide">
          © 2025 <span className="font-semibold text-white">Quiz-App</span>. All
          rights reserved.
        </p>
      </footer>

      <Modal open={open} onClose={() => setOpen(false)} />
=======
      <div
        ref={nextSectionRef}
        className="overflow-hidden flex justify-center py-10"
      >
        <div className="flex items-center w-full max-w-4xl">
          <div className="flex-grow h-0.5 bg-gray-500"></div>
          <div className="px-6 py-3 bg-gray-300 rounded-lg mx-4">
            <h1 className="text-4xl font-Cabin font-bold text-gray-800">
              Choose Your Skill Path
            </h1>
          </div>
          <div className="flex-grow h-0.5 bg-gray-500"></div>
        </div>
      </div>
      <SkillCard handleClickOpen={handleClickOpen} />
      <RoleCard handleClickOpen={handleClickOpen} />
      <section class="bg-white">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <p class="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 SKillQuiz, Inc. All rights reserved.
          </p>
        </div>
      </section>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Mode</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <DialogContentText>
            Select the below modes According to how you known about .
          </DialogContentText>
          <QuizButton label="Easy" />
          <QuizButton label="Intermediate" />
          <QuizButton label="Hard" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
>>>>>>> f882a12a9e4ec7441301f8d78bb8330960f42074
    </>
  );
}
