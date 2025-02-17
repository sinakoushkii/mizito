import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../data";
import { Icon } from "@mui/material";

const Sidebar = ({setIsSidebarOpen,isSidebarOpen,navbarHeight}) => {
  const location = useLocation();

  return (
    <div className={`mt-28 sm:mt-32 fixed top-[${navbarHeight}] right-0 ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} h-full bg-white md:static md:block shadow-xl border w-[270px] px-4 py-2 transform transition-transform duration-300 z-20`}>
      <div className="flex flex-col items-start justify-center gap-2">
        {sidebarLinks.map((link) => (
          <Link
            className={`flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-300 w-full ${
              location.pathname === link.link ? "bg-gray-200" : ""
            } p-2 rounded-md`}
            key={link.id}
            to={link.link}
          >
            <img height={20} width={20} src={link.iconPath} alt={link.title}/>
            <span className="text-[15px]">{link.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
