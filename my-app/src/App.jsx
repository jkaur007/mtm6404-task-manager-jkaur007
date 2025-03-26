import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskList from "./components/TaskList";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import AllTasks from "./pages/AllTasks";
import  TaskContext  from "./context/TaskContext";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <TaskContextProvider> {/* Wrap the app with TaskContextProvider */}
      <Router>
        <div className="app-container">
          <Navbar />
        
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/AllTasks" element={<AllTasks />} />
              
            </Routes>
           
          </main>
          <Footer />
        </div>
      </Router>
    // </TaskContextProvider>
  );
}

export default App;
