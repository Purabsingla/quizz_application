import { useEffect } from "react";

const Modal = ({ open, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-white rounded-2xl shadow-2xl max-w-sm w-full p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white/50 hover:text-white text-xl"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-center mb-3">
          Select Difficulty
        </h2>

        {/* Description */}
        <p className="text-sm text-white/60 text-center mb-6">
          Choose how confident you are with this quiz.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          {["Easy", "Intermediate", "Hard"].map((level) => (
            <button
              key={level}
              onClick={() => console.log(`${level} selected`)}
              className="py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold shadow hover:scale-105 transition-all duration-300"
            >
              {level}
            </button>
          ))}
        </div>

        {/* Cancel */}
        <button
          onClick={onClose}
          className="mt-6 w-full text-sm text-white/50 hover:text-white transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
