import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Goals from "./pages/Goals";
import Habits from "./pages/Habits";
import TimeManagement from "./pages/TimeManagement";
import GoalsPDF from './pages/GoalsPDF';
import HabitsPDF from './pages/HabitsPDF';
import TimeManagementPDF from './pages/TimeManagementPDF';



function App() {

  const URL = "https://freesource-library.herokuapp.com";
  // const apiURL = "https://v1.nocodeapi.com/kayebedesigning/pdf/WKgezVWsvcSbNnwO/url2pdf?url=";
  // const URL = "http://localhost:4000";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={< Home />}/>
        <Route path="/home" element={< Home />}/>
        <Route path="/about" element={< About URL={URL}/>}/>
        <Route path="/goals" element={< Goals URL={URL}/>}/>
        {/* <Route path="/goals/pdf" element={< GoalsPDF URL={URL}/>}/> */}
        <Route path="/habits" element={< Habits URL={URL}/>}/>
        {/* <Route path="/habits/pdf" element={< HabitsPDF URL={URL}/>}/> */}
        <Route path="/timeManagement" element={< TimeManagement URL={URL}/>}/>
        {/* <Route path="/timeManagement/pdf" element={< TimeManagementPDF URL={URL}/>}/> */}
      </Routes>
      <Footer />



    </div>
  );
}

export default App;