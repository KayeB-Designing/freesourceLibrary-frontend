import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Goals from "./pages/Goals";
import Habits from "./pages/Habits";
import TimeManagement from "./pages/TimeManagement";

const URL = "https://freesource-library.herokuapp.com/home";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Routes>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
        <Route path="/goals">
          <Goals URL={URL} />
        </Route>
        <Route path="/habits">
          <Habits URL={URL} />
        </Route>
        <Route path="/timeManagement">
          <TimeManagement URL={URL} />
        </Route>
      </Routes>
      <Footer /> */}

      <h1>Hello World</h1>
      
    </div>
  );
}

export default App;