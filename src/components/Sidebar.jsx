import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen shadow-xl border w-[200px] px-4 py-2">
      <ul>
        <li>
          <Link to="/">داشبورد</Link>
        </li>
        <li>
          <Link to="/about">درباره ما</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
