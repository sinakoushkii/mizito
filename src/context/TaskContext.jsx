import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [allTasks, setAllTasks] = useState([]);

  // Load tasks from localStorage when the app starts
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
    <TaskContext.Provider value={{ allTasks, setAllTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
