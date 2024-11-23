import React, { useState, useEffect } from "react";

const Quiz = ({ language, Data, mode, ques, HandlePoints, HandleClick }) => {
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  if (mode === "Intermediate") mode = "Medium";

  // Function to shuffle array elements
  const shuffleArray = (array) => {
    const shuffledArray = [...array];

    // Separate the special cases
    const noneOfTheseIndex = shuffledArray.indexOf("none of these");
    const allOfTheseIndex = shuffledArray.indexOf("all of these");
    const hasA = shuffledArray.includes("a") || shuffledArray.includes("A");
    const hasB = shuffledArray.includes("b") || shuffledArray.includes("B");

    // Remove "none of these" and "all of these" from the array
    if (noneOfTheseIndex !== -1) shuffledArray.splice(noneOfTheseIndex, 1);
    if (allOfTheseIndex !== -1) shuffledArray.splice(allOfTheseIndex, 1);

    // Shuffle the remaining items
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    // Place "a" and "b" at the third position if both exist
    if (hasA && hasB) {
      shuffledArray.splice(2, 0, "a", "b");
    }

    // Append "none of these" and "all of these" to the bottom
    if (noneOfTheseIndex !== -1) shuffledArray.push("none of these");
    if (allOfTheseIndex !== -1) shuffledArray.push("all of these");

    return shuffledArray;
  };

  // Function to get random data
  const getRandomData = (array, count) => {
    const result = [];
    const usedIndices = new Set();

    while (result.length < count) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        const questionWithShuffledOptions = {
          ...array[randomIndex],
          options: shuffleArray(array[randomIndex].options),
        };
        result.push(questionWithShuffledOptions);
      }
    }

    return result;
  };

  useEffect(() => {
    // Fetch 5 random questions when the component mounts
    const randomData = getRandomData(Data[mode].questions, ques);
    setRandomQuestions(randomData);
  }, [Data, mode]);

  const handleAnswerClick = (selectedOption, correctAnswer) => {
    setSelectedAnswer(selectedOption);
    const correct = selectedOption === correctAnswer;
    correct && HandlePoints();
    setIsCorrect(correct);
    setIsNextEnabled(true);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setIsNextEnabled(false);
    } else {
      HandleClick();
    }
  };

  if (randomQuestions.length === 0) return <p>Loading...</p>;

  const currentQuestionData = randomQuestions[currentQuestionIndex];
  const { questionText, options, correctAnswer } = currentQuestionData;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between w-full max-w-lg mb-2">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-semibold text-white">{language}</h1>
        </div>
      </div>

      {/* Question Section */}
      <div className=" max-w-[50rem] bg-purple-700 p-6 mt-4 rounded-lg shadow-md border border-gray-700">
        <p className="text-purple-300">
          Question {currentQuestionIndex + 1} of {randomQuestions.length}
        </p>
        <div className="mt-3 p-4 rounded-lg bg-blue-600 h-32 overflow-hidden w-[45rem] text-center">
          <h2 className="text-xl font-semibold leading-relaxed text-white break-words">
            {questionText}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="mt-6 space-y-3 w-[45rem]">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option, correctAnswer)}
              className={`flex items-center justify-between p-4 w-full rounded-lg 
                ${
                  selectedAnswer === option
                    ? isCorrect
                      ? "ring-4 ring-green-400"
                      : "ring-4 ring-red-400"
                    : selectedAnswer !== null && option === correctAnswer
                    ? "ring-4 ring-green-400"
                    : "ring-2 ring-purple-600"
                } bg-purple-500 hover:bg-pink-600 transition`}
              disabled={selectedAnswer !== null}
            >
              <span className="bg-pink-600 px-3 py-1 text-sm font-semibold rounded-full text-white">
                {String.fromCharCode(65 + index)}{" "}
                {/* Converts 0 -> A, 1 -> B */}
              </span>
              <span className="ml-4 text-lg text-white">{option}</span>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-600 h-2 mt-6 rounded-full">
          <div
            className="bg-pink-500 h-2 rounded-full transition-all duration-150"
            style={{
              width: `${
                ((currentQuestionIndex + 1) / randomQuestions.length) * 100
              }%`,
            }}
          ></div>
        </div>

        {/* Next/Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleNextClick}
            className={`py-3 px-6 rounded-full text-white transition ${
              isNextEnabled
                ? "bg-pink-500 hover:bg-pink-600"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isNextEnabled}
          >
            {currentQuestionIndex === randomQuestions.length - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
