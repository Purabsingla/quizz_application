import React, { useState } from "react";

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full max-w-lg mb-2">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h6m6 0a9 9 0 11-9-9v0a9 9 0 019 9z"
            />
          </svg>
          <h1 className="text-lg font-semibold text-white">CSS</h1>
        </div>
      </div>

      {/* Question Section */}
      <div className="w-full max-w-lg bg-purple-700 p-6 mt-4 rounded-lg shadow-md border border-gray-700">
        <p className="text-purple-300">Question 1 of 4</p>
        <div className="mt-3 p-4 rounded-lg bg-blue-600 h-32 overflow-hidden">
          <h2 className="text-xl font-semibold leading-relaxed text-white break-words overflow-hidden">
            Which command can you use to re-execute a previous command? This is
            an example of a longer question to demonstrate how it will
          </h2>
        </div>

        {/* Answer Options */}
        <div className="mt-6 space-y-3">
          {[
            { label: "A", text: "!cat" },
            { label: "B", text: "!!" },
            { label: "C", text: "!a" },
            { label: "D", text: "!3" },
          ].map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(index)}
              className={`flex items-center justify-between p-4 w-full rounded-lg 
                bg-purple-500 hover:bg-pink-600 transition 
                ${
                  selectedAnswer === index
                    ? "ring-4 ring-pink-400"
                    : "ring-2 ring-purple-600"
                }`}
            >
              <span className="bg-pink-600 px-3 py-1 text-sm font-semibold rounded-full text-white">
                {answer.label}
              </span>
              <span className="ml-4 text-lg text-white">{answer.text}</span>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-600 h-2 mt-6 rounded-full">
          <div
            className="bg-pink-500 h-2 rounded-full"
            style={{ width: "25%" }} // Progress is 25%
          ></div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-pink-500 text-white py-3 px-6 rounded-full hover:bg-pink-600">
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
