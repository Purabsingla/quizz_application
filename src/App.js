import "./App.css";
import "./CSS/ButtonStyle.css";
import "./CSS/Question.css";
import ResponsiveDrawer from "./Admin/Login/AdminLogin";
import Sidebar from "./Admin/Dashboard/AdminHome";
import Home from "./Home/Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Instruction from "./Instrunctions/Instrunctions";
// import { Sidebar } from "react-mui-sidebar";
// import DataStore from "./Admin/DataStore/DataStore";
// import Quiz from "./Questions/MCQ";
function App() {
  const [language, setLanguage] = useState("");
  const [mode, setMode] = useState("");
  const [viewSidebar, setViewSidebar] = useState(false);
  return (
    <div className="App">
      {/* <Quiz /> */}
      {/* <DataStore /> */}
      {/* <Sidebar /> */}
      {viewSidebar ? (
        <div>
          <Sidebar />
        </div>
      ) : (
        <div>
          <Routes>
            <Route
              path="/"
              element={<Home setLanguage={setLanguage} setMode={setMode} />}
            />
            <Route
              path="/instruction"
              element={<Instruction language={language} mode={mode} />}
            ></Route>
            <Route
              path="/Login"
              element={<ResponsiveDrawer setViewSidebar={setViewSidebar} />}
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
