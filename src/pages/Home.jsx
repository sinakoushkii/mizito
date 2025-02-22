import React, { useContext, useEffect, useState } from "react";
import { Badge, Button, Typography } from "@mui/material";
import CustomModal from "../components/CustomModal";
import supportIcon from "../assets/icons/blackChat.png";
import textIcon from "../assets/icons/text.png";
import { colleagues, timeTable } from "../data";
import { TaskContext } from "../context/TaskContext";
import Checkbox from "@mui/material/Checkbox";
import profilePattern from "../assets/images/profilePattern.png";
import profilePlaceholder from "../assets/images/profilePlaceholder.jpg";
import { getPersianDate, toPersianNumber } from "../utils/utils";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import { AreaChart } from "../components/AreaChart";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [notePending, setNotePending] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    setTimeout(() => {
      setNotePending(false);
    }, 800);
  }, []);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const { allTasks, setAllTasks } = useContext(TaskContext);
  const filteredTask = allTasks.filter((task) => task.category !== "done");

  const taskCheckHandler = (checkedTask) => {
    const uncheckedTasks = allTasks.filter(
      (task) => task.task !== checkedTask.task
    );
    checkedTask.category = "done";
    setAllTasks([...uncheckedTasks, checkedTask]);
  };

  return (
    <div className="w-full h-screen px-6 py-4 overflow-y-scroll">
      <div className="flex flex-row-reverse items-center h-screen">
        {/* profile */}
        <div className="hidden md:flex flex-col items-center justify-start w-[300px] h-full">
          <div className="relative w-full h-max">
            <img
              className="w-full"
              src={profilePattern}
              alt="profile-pattern"
            />
            <img
              className="profile-placeholder w-1/2 rounded-lg shadow-xl"
              src={profilePlaceholder}
            />
          </div>
          <div className="text-center">
            <p className="text-center text-md font-bold mb-3">سینا کوشکی</p>
            <span className="font-bold text-xs bg-gray-300 text-cyan-800 rounded-full px-2 py-1">
              {" "}
              روز بخیر: {getPersianDate()}
            </span>
          </div>
          <div className="border border-b-0 border-x-0 mt-4 py-3 px-2 w-full cursor-pointer">
            <p>سایر میز کارهای شما:</p>
            <div className="flex flex-col place-content-center w-full border-2 border-dashed rounded-xl mx-3 my-3 h-[110px]">
              <p className="text-[40px] text-cyan-600 text-center mb-0 p-0">
                +
              </p>
              <p className="text[13px] text-cyan-600 text-center mt-0">
                ایجاد میزکار جدید
              </p>
            </div>
          </div>
        </div>

        <div className="grow h-full">
          {/* your table */}
          <div className="flex items-center justify-between w-full pt-4">
            <h1 className="text-xl sm:text-3xl font-bold">میز کار شما</h1>
            <div className="flex items-center justify-center gap-3">
              <span
                className="flex items-center gap-2 bg-orange-300 px-3 py-2 rounded-lg cursor-pointer"
                onClick={handleOpen}
              >
                <img width={18} height={18} src={supportIcon} alt="support" />
                پشتیبانی
              </span>
              <span className="flex items-center gap-2 bg-gray-200 px-3 py-2 rounded-lg cursor-pointer">
                <img width={14} height={14} src={textIcon} alt="support" />
                راهنما
              </span>
            </div>
          </div>
          {/* time table */}
          <div className="flex items-center justify-start gap-2 sm:gap-5 my-8">
            {timeTable.map((task) => {
              return (
                <div
                  key={task.id}
                  className="flex flex-col items-center justify-center gap-5 rounded-lg border px-2 sm:px-6 py-2 w-[100px] sm:w-[120px] h-[150px] text-center"
                >
                  <img src={task.iconPath} width={20} height={20} />
                  <p className="text-[12px]">{task.title}</p>
                  <Badge
                    badgeContent={toPersianNumber(task.count)}
                    color="primary"
                  ></Badge>
                </div>
              );
            })}
          </div>
          {/* colleagues */}
          <div className="flex items-center gap-3 w-full my-8">
            <p className="font-bold text-xl">همکاران من :</p>
            <div className="flex items-center justify-start gap-2">
              {colleagues.map((colleague) => {
                return (
                  <Tooltip title={colleague.name}>
                    <img
                      className="rounded-full object-cover cursor-pointer"
                      key={colleague.id}
                      src={colleague.profilePath}
                      width={30}
                      height={30}
                      alt={colleague.name}
                    />
                  </Tooltip>
                );
              })}
            </div>
          </div>
          {/* task table */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-4 border-t-2 pt-4">
            {/* my tasks */}
            <div className="relative w-full border rounded-t-xl grow h-[300px] max-h-[300px] overflow-scroll">
              <div className="text-center bg-green-600 rounded-t-xl py-1 w-full">
                <span className="text-center text-[14px] text-white">
                  کارهای من ({toPersianNumber(filteredTask.length)})
                </span>
              </div>
              {notePending ? (
                <CircularProgress
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    display: "flex",
                    transform:"translate(-50%,-50%)"
                  }}
                />
              ) : (
                filteredTask.map((task) => {
                  return (
                    <div
                      key={task.task}
                      className="flex items-center gap-1 border border-r-0 border-l-0 w-full px-2 py-0"
                    >
                      <Checkbox
                        onClick={() => taskCheckHandler(task)}
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                        {...label}
                      />
                      <p className="text-[14px]">{task.task}</p>
                    </div>
                  );
                })
              )}
              {!notePending && !filteredTask.length > 0 ? <p className="text-gray-500 text-center my-4">
                  تسکی برای انجام ندارید
                </p> : null}
            </div>
            {/* others work  */}
            <div className="w-full border rounded-t-xl grow h-[300px] max-h-[300px] overflow-scroll">
              <div className="text-center bg-red-500 rounded-t-xl py-1 w-full">
                <span className="text-center text-[14px] text-white">
                  پیگیری از دیگران ({toPersianNumber(0)})
                </span>
              </div>
              <p className="text-gray-500 text-center my-4">
                کاری برای پیگیری ندارید
              </p>
            </div>
          </div>

          <div className="w-full my-10">
            <AreaChart />
          </div>
        </div>
      </div>
      <CustomModal title="تست مدال" open={open} closeModal={handleClose}>
        <div>
          <Typography
            className="!text-justify"
            id="keep-mounted-modal-description"
            sx={{ mt: 2 }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </Typography>
          <Button
            className="self-start"
            sx={{ mt: 2 }}
            onClick={handleOpen}
            variant="contained"
            color="primary"
          >
            کلیک کنید
          </Button>
        </div>
      </CustomModal>
    </div>
  );
};

export default Home;
