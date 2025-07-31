import "./App.css";
import "./CSS/ButtonStyle.css";
import "./CSS/Question.css";
// import Finish from "./FinishPage/FinishPage";
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
  const [viewSidebar, setViewSidebar] = useState(false);
  return (
    <div className="App">
      {viewSidebar ? (
        <div>
          <Sidebar />
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instruction" element={<Instruction />}></Route>
            <Route
              path="/Login"
              element={<ResponsiveDrawer setViewSidebar={setViewSidebar} />}
            />
          </Routes>
        </div>
      )}
      {/* <Finish /> */}
    </div>
  );
}

export default App;
