import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import "../CSS/Loader.css";
import Quiz from "../Questions/MCQ";
import axios from "axios";
import Finish from "../FinishPage/FinishPage";
export default function Instruction({ mode, language }) {
  let Data = {
    question: mode === "Easy" ? 7 : mode === "Intermediate" ? 6 : 5,
    total: mode === "Easy" ? 70 : mode === "Intermediate" ? 60 : 50,
  };
  const [modeData, setModeData] = useState({});
  const [page, setPage] = useState(0);
  const [Points, setPoints] = useState(0);
  const DETA = {
    title: language,
    mode: mode === "Intermediate" ? "Medium" : mode,
  };
  console.log(DETA);
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/getdatabytitle", DETA)
      .then((response) => {
        console.log(response.data.Data.modes);
        setModeData(response.data.Data.modes);
      })
      .catch((error) => console.log(error));
  }, []);

  const HandleClick = () => {
    console.log(page + 1);
    setPage(page + 1);
  };
  const HandlePoints = () => {
    setPoints(Points + 10);
  };
  return (
    <>
      {page === 0 && mode && language ? (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          <div className="bg-gradient-to-b from-white to-gray-100 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
                SKILL QUIZ
              </h1>
              <div className="bg-white rounded-lg px-6 py-3 shadow-inner">
                <p className="text-lg mb-3">
                  <span className="font-semibold text-gray-700">
                    Selected Quiz Topic:
                  </span>{" "}
                  <span className="text-purple-700">{language}</span>
                </p>
                <p className="text-lg mb-3">
                  <span className="font-semibold text-gray-700">
                    Selected Quiz Mode:
                  </span>{" "}
                  <span className="text-purple-700">{mode}</span>
                </p>
                <p className="text-lg mb-3">
                  <span className="font-semibold text-gray-700">
                    Total Questions:
                  </span>{" "}
                  <span className="text-purple-700">{Data.question}</span>
                </p>
                <p className="text-lg mb-3">
                  <span className="font-semibold text-gray-700">
                    Score in Total:
                  </span>{" "}
                  <span className="text-purple-700">{Data.total}</span>
                </p>
              </div>
            </div>
            <div className="text-center">
              <Button
                variant="contained"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                size="large"
                onClick={HandleClick}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                  padding: "12px 60px",
                  borderRadius: "9999px",
                }}
              >
                Start
              </Button>
            </div>
          </div>
        </div>
      ) : page === 1 ? (
        <Quiz
          language={language}
          Data={modeData}
          mode={mode}
          ques={Data.question}
          HandlePoints={HandlePoints}
          HandleClick={HandleClick}
        />
      ) : page === 2 ? (
        <Finish
          Points={Points}
          total={Data.total}
          mode={mode}
          language={language}
          HandleClick={HandleClick}
        />
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="cube-loader mb-6">
            <div className="cube-top"></div>
            <div className="cube-wrapper">
              <span style={{ "--i": 0 }} className="cube-span"></span>
              <span style={{ "--i": 1 }} className="cube-span"></span>
              <span style={{ "--i": 2 }} className="cube-span"></span>
              <span style={{ "--i": 3 }} className="cube-span"></span>
            </div>
          </div>
          <h1 className="text-xl font-bold">Loading...</h1>
        </div>
      )}
    </>
  );
}
