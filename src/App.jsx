import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="w-full h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-row-reverse items-center justify-end w-full h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {isSidebarOpen && <Sidebar />}
        </div>
      </div>
    </div>
  );
};

export default App;
