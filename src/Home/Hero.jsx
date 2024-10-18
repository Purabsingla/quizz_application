import React from "react";
import Lottie from "lottie-react";
import animationData from "../assests/HomePageAnimation2.json";

const Hero = ({ handleClick }) => {
  return (
    <div className="hero-section bg-white text-gray-900 flex items-center justify-between min-h-screen px-8 mx-[100px]">
      <div className="text-container max-w-xl">
        <h1 className="text-5xl font-bold mb-6">Welcome to Skill Quiz</h1>
        <p className="text-xl mb-4">
          Test your knowledge with quizzes in multiple languages
        </p>
        <button className="cssbuttons-io-button" onClick={handleClick}>
          Get started
          <div className="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div className="animation-container w-full max-w-md">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default Hero;
