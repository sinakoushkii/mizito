import React, { useState,useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Notes from "./pages/Notes";
import Projects from "./pages/Projects";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Auto-close on small screens, auto-open on large screens
  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 950); // Open on large screens, close on small screens
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar function
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="w-full h-screen">
        <Navbar
          toggleSidebar={toggleSidebar}
          setNavbarHeight={setNavbarHeight}
        />
        {/* Overlay Background */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm md:hidden z-10"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className="flex flex-row-reverse items-center justify-end w-full h-full">
          <Routes>
            <Route path="/" element={<Home marginTop={navbarHeight} />} />
            <Route path="/about" element={<About />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          {isSidebarOpen && (
            <Sidebar
              setIsSidebarOpen={setIsSidebarOpen}
              isSidebarOpen={isSidebarOpen}
              navbarHeight={navbarHeight}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
