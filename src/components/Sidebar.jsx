import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarLinks } from "../data";
import { TaskContext } from "../context/TaskContext";
import { toPersianNumber } from "../utils/utils";
import Badge from "@mui/material/Badge";
import Colleagues from "./Colleagues";

const Sidebar = ({ isSidebarOpen, navbarHeight }) => {
  const location = useLocation();
  const { allTasks } = useContext(TaskContext);


  const filteredTask = allTasks.filter((task) => task.category !== "done");
  console.log('navbar height '+navbarHeight)

  return (
    <div
      className={`fixed top-[${navbarHeight}px] right-0 ${ isSidebarOpen ? "translate-x-0" : "translate-x-full"} bg-white lg:static lg:block shadow-xl w-[270px] px-1 py-2 transform transition-transform duration-300 z-20 h-screen border-2`}
    >
      <div className="flex flex-col items-start justify-start gap-2 h-full border-2 border-blue-500 w-full">
        {sidebarLinks.map((link) => (
          <Link
            className={`flex items-center gap-2 text-lg text-gray-700 hover:bg-gray-300 w-full ${
              location.pathname === link.link ? "bg-gray-200" : ""
            } p-2 rounded-md`}
            key={link.id}
            to={link.link}
          >
            <img height={20} width={20} src={link.iconPath} alt={link.title} />
            <span className="text-[15px] ml-3">{link.title}</span>

            {link.title === "پروژه ها" && (
              <Badge
                badgeContent={toPersianNumber(filteredTask.length)}
                color="primary"
              ></Badge>
            )}
          </Link>
        ))}
        <Colleagues />
      </div>
    </div>
  );
};

export default Sidebar;
