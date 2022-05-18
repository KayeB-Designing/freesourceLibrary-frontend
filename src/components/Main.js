import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Goals from "../pages/Goals";
import Habits from "../pages/Habits";
import TimeManagement from "../pages/TimeManagement";

export default function Main() {
    const URL = "https://freesource-library.herokuapp.com";
    // const apiURL = "https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=";
    // const URL = "http://localhost:4000";
  
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={< Home />}/>
          <Route path="/home" element={< Home />}/>
          {/* <Route path="/index.html" element={< Goals />}/> */}
          <Route path="/about" element={< About URL={URL}/>}/>
          <Route path="/goals" element={< Goals URL={URL}/>}/>
          {/* <Route path="/goals/pdf" element={< GoalsPDF URL={URL}/>}/> */}
          <Route path="/habits" element={< Habits URL={URL}/>}/>
          {/* <Route path="/habits/pdf" element={< HabitsPDF URL={URL}/>}/> */}
          <Route path="/timeManagement" element={< TimeManagement URL={URL}/>}/>
          {/* <Route path="/timeManagement/pdf" element={< TimeManagementPDF URL={URL}/>}/> */}
        </Routes>
      </div>
    );
}
