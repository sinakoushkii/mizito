import React, { useState } from "react";
import { Badge, Button, Typography } from "@mui/material";
import CustomModal from "../components/CustomModal";
import supportIcon from "../assets/icons/blackChat.png";
import textIcon from "../assets/icons/text.png";
import { timeTable, toPersianNumber } from "../data";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full h-full px-6 py-4 mt-32">
      <div className="flex flex-row-reverse items-center h-full">
        <div className="hidden md:block w-[300px] border-2 border-black h-full">
          پروفایل و عکس
        </div>

        <div className="grow border-2 border-blue-600 h-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-3xl font-bold">میز کار شما</h1>
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
          <div className="flex items-center justify-start gap-5">
            {timeTable.map((task) => {
              return (
                <div key={task.id} className="flex flex-col items-center justify-center gap-5 rounded-lg border px-2 sm:px-6 py-2 w-[90px] sm:w-[120px] h-[150px] text-center">
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
          {/* <div className="border-2 border-black w-[300px] mt-6"></div> */}
        </div>
      </div>
      <CustomModal title="تست مدال" open={open} closeModal={handleClose}>
        <Typography
          className="!text-justify"
          id="keep-mounted-modal-description"
          sx={{ mt: 2 }}
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
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
      </CustomModal>
    </div>
  );
};

export default Home;
