import React from 'react'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Get the current location (route)

  // Check the current route and set the background color
  const getNavbarBackground = () => {
    if (location.pathname === "/") {
      return "bg-red-500"; // Blue background for the home page
    } else if (location.pathname === "/about") {
      return "bg-green-500"; // Green background for the about page
    }
    return "bg-gray-500"; // Default background
  };


  return (
    <div className={`px-5 py-4 w-full ${getNavbarBackground()} transition-colors duration-300 ease-in-out`}>navbar</div>
  )
}

export default Navbar