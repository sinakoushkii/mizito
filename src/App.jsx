import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <Navbar />
        <div className="flex flex-row-reverse items-center justify-end w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default App;
