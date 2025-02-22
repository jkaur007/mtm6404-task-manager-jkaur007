import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import UserGreeting from "./user/UserGreeting";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
      
        <main> <UserGreeting isLoggedIn ={false}></UserGreeting>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/about" element={<About />} />
          </Routes>
         
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
