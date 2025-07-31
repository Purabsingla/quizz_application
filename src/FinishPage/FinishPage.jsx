import "../CSS/Homenextbutton.css";
import { Link } from "react-router-dom";
export default function Finish({ Points, total, mode, language, HandleClick }) {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
      <div className="w-[35rem] rounded-md bg-white shadow-lg p-8">
        {/* Header */}
        <div className="font-Cabin font-extrabold text-4xl text-center mb-6">
          Quiz Complete 🎉
        </div>

        {/* Score Section */}
        <div className="bg-gray-200 rounded-lg p-6 mb-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Your Results
          </h2>
          <div className="text-lg font-medium text-gray-600">
            <p className="flex justify-between mb-2">
              <span>Score:</span>
              <span className="text-blue-500 font-bold">
                {Points} / {total} / {mode} / {language}
              </span>
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="h-[4.99rem] flex justify-center items-center">
          <Link to={"/"}>
            <button
              class="cta"
              onClick={() => {
                mode = null;
                language = null;
                HandleClick();
                console.log("Done bhai ");
              }}
            >
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
