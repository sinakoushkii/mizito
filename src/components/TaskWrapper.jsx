import React, { useState,useRef } from "react";
import CustomModal from "./CustomModal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const TaskWrapper = ({
  backgroundColor,
  title,
  category,
  setAllTasks,
  allTasks,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const [draggedTask, setDraggedTask] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 });
  const longPressTimeout = useRef(null);

  // Filter tasks belonging to this category
  const filteredTasks = allTasks.filter((task) => task.category === category);

  // Handle dragging
  const handleDragStart = (event, task) => {
    event.dataTransfer.setData("task", JSON.stringify(task));
  };

  // Handle dropping
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedTask = JSON.parse(event.dataTransfer.getData("task"));

    // Update task category
    setAllTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.task === droppedTask.task ? { ...task, category } : task
      )
    );
  };

  // Handle Long Press Start (Mobile)
  const handleTouchStart = (event, task) => {
    longPressTimeout.current = setTimeout(() => {
      setDraggedTask(task);
      setIsDragging(true);
      setTouchPosition({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      });
    }, 500); // Long press duration
  };

  // Handle Touch Move (Mobile)
  const handleTouchMove = (event) => {
    if (isDragging) {
      setTouchPosition({
        x: event.touches[0].clientX,
        y: event.touches[0].clientY,
      });
    }
  };

   // Handle Touch End (Mobile)
   const handleTouchEnd = (event) => {
    clearTimeout(longPressTimeout.current);

    if (isDragging) {
      const element = document.elementFromPoint(
        touchPosition.x,
        touchPosition.y
      );

      if (element && element.getAttribute("data-category")) {
        const newCategory = element.getAttribute("data-category");

        // Update task category
        setAllTasks((prevTasks) =>
          prevTasks.map((task) =>
            task.task === draggedTask.task
              ? { ...task, category: newCategory }
              : task
          )
        );
      }

      setDraggedTask(null);
      setIsDragging(false);
    }
  };

  const openModalHandler = (event) => {
    event.preventDefault();
    setOpenModal(true);
  };
  const closeModalHandler = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };
  const taskTitleHandler = (event) => {
    event.preventDefault();
    setTaskTitle(event.target.value);
  };
  const taskSubmitHandler = (event) => {
    event.preventDefault();
    console.log(taskTitle);

    if (!taskTitle) {
      setShowError(true);
    }
    setShowError(false);
    setAllTasks([...allTasks, { task: taskTitle, category }]);
    setTaskTitle("");
    setOpenModal(false);
  };

  const deleteTaskHandler = (taskTitle) => {
    const filteredTasks = allTasks.filter((task) => task.task !== taskTitle);
    setAllTasks([...filteredTasks]);
  };

  return (
    <div
      style={{ backgroundColor: backgroundColor, opacity: "70%" }}
      className="h-[300px] w-full max-w-[300px] bg-opacity-70 rounded-md px-3 py-3 overflow-auto"
      onDragOver={(e) => e.preventDefault()} // Allow dropping
      onDrop={handleDrop} // Handle drop event
    >
      <div
        style={{ backgroundColor: backgroundColor, opacity: "100%" }}
        className="px-2 py-1 rounded-md border-2"
      >
        <h3 className="text-white">
          ({filteredTasks.length}) {title}
        </h3>
      </div>
      <div
        onClick={(e) => openModalHandler(e)}
        className="bg-gray-400 px-2 py-1 rounded-md mt-2 cursor-pointer hover:bg-gray-500"
      >
        <h3 className="text-white text-center">وظیفه جدید +</h3>
      </div>
      <div className="flex flex-col justify-center items-center gap-1 w-full">
        {filteredTasks.length > 0 &&
          filteredTasks.map((task) => (
            <div
              key={task.task}
              className="flex items-center justify-between bg-white text-black px-2 py-2 rounded-md mt-2 cursor-pointer w-full"
              draggable={true}
              onDragStart={(event) => handleDragStart(event, task)}
              onTouchStart={(event) => handleTouchStart(event, task)} // Mobile Start
              onTouchMove={handleTouchMove} // Mobile Move
              onTouchEnd={handleTouchEnd} // Mobile End
            >
              {task.task}
              <IconButton onClick={() => deleteTaskHandler(task.task)}>
                <CloseIcon sx={{ fontSize: "15px" }} />
              </IconButton>
            </div>
          ))}
      </div>
      {openModal && (
        <CustomModal
          title="افزودن وظیفه جدید"
          open={openModal}
          closeModal={closeModalHandler}
        >
          <TextField
            autoFocus
            sx={{ marginTop: "1rem" }}
            required
            id="outlined-basic"
            label="عنوان"
            variant="outlined"
            value={taskTitle}
            onChange={taskTitleHandler}
          />
          {showError && (
            <p className="text-red-500 text-[12px] mt-1">
              لطفا عنوان وظیفه را وارد کنید
            </p>
          )}
          <Button
            onClick={taskSubmitHandler}
            className="self-end !mt-3"
            variant="contained"
          >
            ثبت
          </Button>
        </CustomModal>
      )}
    </div>
  );
};

export default TaskWrapper;
