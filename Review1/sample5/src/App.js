import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/ReviewHome";
// import Signin from "./components/ReviewSignin";

// import Login from "./components/ReviewLogin";

function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<ReviewHome />} />
          <Route path="/signup" element={<ReviewSignin />} />
        </Routes>
      </Router> */}
      <Home/>

      {/* <Login/> */}
      {/* <Signin/> */}
    </div>
  );
}

export default App;
