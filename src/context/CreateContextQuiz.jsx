import { useState } from "react";
import { Context } from "./CreateContext";
export const QuizDataProvider = ({ children }) => {
  const [quizData, setQuizData] = useState({
    language: "",
    mode: "",
  });

  return (
    <Context.Provider value={{ quizData, setQuizData }}>
      {children}
    </Context.Provider>
  );
};
