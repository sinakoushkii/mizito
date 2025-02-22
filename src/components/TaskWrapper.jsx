import React, { useState, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import CustomModal from "./CustomModal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { getEmptyImage } from "react-dnd-html5-backend";
import { toPersianNumber } from "../utils/utils";




const ItemTypes = {
  TASK: "task",
};

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

  // Filter tasks belonging to this category
  const filteredTasks = allTasks.filter((task) => task.category === category);

  // Drop logic for the task wrapper
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (droppedTask) => {
      // Update task category on drop
      setAllTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.task === droppedTask.task ? { ...task, category } : task
        )
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  // Task Item Component
  const TaskItem = ({ task }) => {
    const [{ isDragging }, drag, preview] = useDrag({
      type: ItemTypes.TASK,
      item: task,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    // Hide default drag preview
    React.useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
    }, [preview]);

    const dragStyles = {
      opacity: isDragging ? 0 : 1, // Hide original item while dragging
      cursor: isDragging ? "grabbing" : "pointer",
    };

    return (
      <div
        ref={drag}
        style={dragStyles}
        className="flex items-center justify-between bg-white text-black px-2 py-2 rounded-md mt-2 cursor-pointer w-full"
      >
        {task.task}
        <IconButton onClick={() => deleteTaskHandler(task.task)}>
          <CloseIcon sx={{ fontSize: "15px" }} />
        </IconButton>
      </div>
    );
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
    if (!taskTitle) {
      setShowError(true);
      return;
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
      ref={drop} // Make the category droppable
      style={{
        backgroundColor: isOver ? "#f0f0f0" : backgroundColor, // Change background on hover
        // opacity: "70%",
        transition: "background-color 0.3s ease", // Smooth transition
      }}
      className="w-full min-h-[500px] md:min-h-[400px] max-w-[400px] bg-opacity-70 rounded-md px-6 md:px-3 py-3 overflow-auto"
    >
      <div
        style={{ backgroundColor: backgroundColor, opacity: "100%" }}
        className="px-2 py-1 rounded-md border-2"
      >
        <h3 className="text-white">
          {title} ( {toPersianNumber(filteredTasks.length)} )
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
          filteredTasks.map((task) => <TaskItem key={task.task} task={task} />)}
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
