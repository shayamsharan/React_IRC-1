import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/ReviewHome";
import Signin from "./components/ReviewSignin";
import Login from './components/ReviewLogin';
import {Route,Routes} from 'react-router-dom';



function App() {
  return (

    <div>
    
      {/* <Router> */}
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signin />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
     
    
    </div>
  );
}

export default App;
