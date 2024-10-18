import "./App.css";
// import Home from "./Home/Home";
import "./CSS/ButtonStyle.css";
import "./CSS/Question.css";
// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Instruction from "./Instrunctions/Instrunctions";
// import DataStore from "./DataStore/DataStore";
import Quiz from "./Questions/MCQ";
function App() {
  // const [language, setLanguage] = useState("");
  // const [mode, setMode] = useState("");
  return (
    <div className="App">
      <Quiz />
      {/* <Routes>
        <Route
          path="/"
          element={<Home setLanguage={setLanguage} setMode={setMode} />}
        />
        <Route
          path="/instruction"
          element={<Instruction language={language} mode={mode} />}
        ></Route>
        <Route path="/Insertion" element={<DataStore />} />
      </Routes> */}
    </div>
  );
}

export default App;
