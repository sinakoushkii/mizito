import React, { useContext } from "react";
import TaskWrapper from "../components/TaskWrapper";
import { TaskContext } from "../context/TaskContext";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import CustomDragLayer from "../components/CustomDragLayer";

const Projects = () => {
  const { allTasks, setAllTasks } = useContext(TaskContext);
  
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  return (
    <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
      <div className="w-full h-full mt-32 px-4 pb-8 overflow-auto">
        <CustomDragLayer /> {/* Add this line */}
        <div className="flex flex-col justify-center items-center md:flex-row center md:justify-start gap-4 mt-6">
          <TaskWrapper
            title="برای انجام"
            category="todo"
            backgroundColor="#2C3A47"
            allTasks={allTasks}
            setAllTasks={setAllTasks}
          />
          <TaskWrapper
            title="در حال انجام"
            category="doing"
            backgroundColor="#0a3d62"
            allTasks={allTasks}
            setAllTasks={setAllTasks}
          />
          <TaskWrapper
            title="انجام شده"
            category="done"
            backgroundColor="#006266"
            allTasks={allTasks}
            setAllTasks={setAllTasks}
          />
        </div>
      </div>
    </DndProvider>
  );
};

export default Projects;
