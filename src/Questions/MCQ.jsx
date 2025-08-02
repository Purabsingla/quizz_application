import React, { useState, useEffect } from "react";
import { Clock, Target, CheckCircle, XCircle, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex flex-col justify-center items-center p-6">
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-violet-600/20 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Header Section */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-4xl mb-8 animate-fade-in-up">
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
            <Target className="w-4 h-4 mr-2" />
            {language} Quiz
          </div>
        </div>
        <div className="flex items-center space-x-4 text-white/80">
          <Clock className="w-5 h-5" />
          <span className="text-sm font-medium">
            Question {currentQuestionIndex + 1} of {randomQuestions.length}
          </span>
        </div>
      </div>

      {/* Main Quiz Container */}
      <div className="relative z-10 w-full max-w-4xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-up animation-delay-200">
        {/* Background Pattern */}
        <div className="absolute inset-0 rounded-3xl opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),rgba(255,255,255,0))]"></div>
        </div>

        {/* Progress Indicator */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-slate-300 text-sm font-medium">Progress</span>
            <span className="text-slate-300 text-sm font-medium">
              {Math.round(
                ((currentQuestionIndex + 1) / randomQuestions.length) * 100
              )}
              %
            </span>
          </div>
          <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-500 shadow-lg shadow-blue-500/25"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / randomQuestions.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question Section */}
        <div className="relative z-10 mb-8 animate-fade-in-up animation-delay-400">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">
                  {currentQuestionIndex + 1}
                </span>
              </div>
              <span className="text-blue-300 text-sm font-medium">
                Question
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white leading-relaxed break-words">
              {questionText}
            </h2>
          </div>
        </div>

        {/* Answer Options */}
        <div className="relative z-10 space-y-4 mb-8 animate-fade-in-up animation-delay-600">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option, correctAnswer)}
              className={`group relative w-full p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/20 ${
                selectedAnswer === option
                  ? isCorrect
                    ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400 shadow-lg shadow-green-500/25"
                    : "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-2 border-red-400 shadow-lg shadow-red-500/25"
                  : selectedAnswer !== null && option === correctAnswer
                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-400 shadow-lg shadow-green-500/25"
                  : "bg-gradient-to-r from-white/5 to-white/10 border border-white/20 hover:border-white/40 hover:bg-white/15"
              }`}
              disabled={selectedAnswer !== null}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex items-center">
                {/* Option Letter */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-6 font-bold text-white transition-all duration-300 ${
                    selectedAnswer === option
                      ? isCorrect
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-gradient-to-r from-red-500 to-pink-500"
                      : selectedAnswer !== null && option === correctAnswer
                      ? "bg-gradient-to-r from-green-500 to-emerald-500"
                      : "bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>

                {/* Option Text */}
                <span className="flex-1 text-left text-lg font-medium text-white group-hover:text-white transition-colors duration-300">
                  {option}
                </span>

                {/* Status Icon */}
                {selectedAnswer !== null && (
                  <div className="flex-shrink-0 ml-4">
                    {(selectedAnswer === option && isCorrect) ||
                    (selectedAnswer !== option && option === correctAnswer) ? (
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    ) : selectedAnswer === option && !isCorrect ? (
                      <XCircle className="w-6 h-6 text-red-400" />
                    ) : null}
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Next/Submit Button */}
        <div className="relative z-10 flex justify-center animate-fade-in-up animation-delay-800">
          <button
            onClick={handleNextClick}
            className={`group relative inline-flex items-center justify-center px-12 py-4 text-xl font-bold text-white rounded-2xl shadow-2xl transform transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-400/50 overflow-hidden ${
              isNextEnabled
                ? "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 hover:scale-110 shadow-blue-500/25 hover:shadow-purple-500/40"
                : "bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed opacity-50"
            }`}
            disabled={!isNextEnabled}
          >
            {isNextEnabled && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </>
            )}

            <span className="relative z-10">
              {currentQuestionIndex === randomQuestions.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </span>

            {isNextEnabled && (
              <ArrowRight className="relative z-10 ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            )}

            {/* Button Glow Effect */}
            {isNextEnabled && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -z-10"></div>
            )}
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60 animate-bounce animation-delay-1000"></div>
      </div>
    </div>
  );
};

export default Quiz;
