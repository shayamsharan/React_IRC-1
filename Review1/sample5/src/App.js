import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/ReviewHome";
import Signin from "./components/ReviewSignin";
import Login from './components/ReviewLogin';
import { Dashboard } from "@mui/icons-material";

function App() {
  return (
    <div>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
