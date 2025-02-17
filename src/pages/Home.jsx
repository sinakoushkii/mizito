import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import CustomModal from "../components/CustomModal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full h-full px-4 py-2">
      <h1 className="text-3xl underline">این یک میز کار است</h1>
      <Typography variant="h4">سلام، خوش آمدید!</Typography>
      <Button onClick={handleOpen} variant="contained" color="primary">
        کلیک کنید
      </Button>
      <CustomModal title="تست مدال" open={open} closeModal={handleClose}>
        <Typography className="!text-justify" id="keep-mounted-modal-description" sx={{ mt: 2 }}>
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
