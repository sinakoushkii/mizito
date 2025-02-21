import React, { useContext, useState } from "react";
import { Badge, Button, Typography } from "@mui/material";
import CustomModal from "../components/CustomModal";
import supportIcon from "../assets/icons/blackChat.png";
import textIcon from "../assets/icons/text.png";
import { colleagues, timeTable, toPersianNumber } from "../data";
import { TaskContext } from "../context/TaskContext";
import Checkbox from "@mui/material/Checkbox";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const { allTasks, setAllTasks } = useContext(TaskContext);
  const filteredTask = allTasks.filter((task) => task.category !== "done");

  const taskCheckHandler = (checkedTask) => {
    const uncheckedTasks = allTasks.filter(
      (task) => task.task !== checkedTask.task
    );
    checkedTask.category = "done";
    setAllTasks([...uncheckedTasks,checkedTask])
  };

  return (
    <div className="w-full h-screen px-6 py-4 mt-32">
      <div className="flex flex-row-reverse items-center h-screen">
        <div className="hidden md:block w-[300px] border-2 border-black h-full">
          پروفایل و عکس
        </div>

        <div className="grow h-full">
          {/* your table */}
          <div className="flex items-center justify-between w-full">
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
                  <img
                    className="rounded-full object-cover cursor-pointer"
                    key={colleague.id}
                    src={colleague.profilePath}
                    width={30}
                    height={30}
                    alt={colleague.name}
                  />
                );
              })}
            </div>
          </div>
          {/* task table */}
          <div className="flex flex-col xl:flex-row items-center justify-center w-full gap-4 border-t-2 pt-4">
            {/* my tasks */}
            <div className="w-full border rounded-t-xl grow min-h-[300px]">
              <div className="text-center bg-green-600 rounded-t-xl py-1 w-full">
                <span className="text-center text-[14px] text-white">
                  کارهای من ({toPersianNumber(filteredTask.length)})
                </span>
              </div>
              {filteredTask.length > 0 ? (
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
              ) : (
                <p className="text-gray-500 text-center my-4">
                  تسکی برای انجام ندارید
                </p>
              )}
            </div>
            {/* others work  */}
            <div className="w-full border rounded-t-xl grow min-h-[300px]">
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
