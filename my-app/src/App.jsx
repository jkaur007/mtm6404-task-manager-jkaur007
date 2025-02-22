import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
       
        <main>
        
          <Routes>
         
            <Route path="/" element={<TaskList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
