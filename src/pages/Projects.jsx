import React, { useState,useEffect } from "react";
import TaskWrapper from "../components/TaskWrapper";

const Projects = () => {
  const [allTasks, setAllTasks] = useState([]);


  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setAllTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever allTasks changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
  }, [allTasks]);

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
