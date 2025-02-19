import React, { useContext } from "react";
import TaskWrapper from "../components/TaskWrapper";
import { TaskContext } from "../context/TaskContext";

const Projects = () => {

  const { allTasks, setAllTasks } = useContext(TaskContext);

  return (
    <div className="w-full h-full mt-32 px-4 pb-8 overflow-auto">
      <div className="flex center justify-start gap-4 mt-6">
        <TaskWrapper
          title="برای انجام"
          category="todo"
          backgroundColor="#0242e3"
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        />
        <TaskWrapper
          title="در حال انجام"
          category="doing"
          backgroundColor="#f72fb1"
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        />
        <TaskWrapper
          title="انجام شده"
          category="done"
          backgroundColor="#018226"
          allTasks={allTasks}
          setAllTasks={setAllTasks}
        />
      </div>
    </div>
  );
};

export default Projects;
