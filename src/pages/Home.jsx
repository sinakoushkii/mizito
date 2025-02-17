import React from "react";
import { Button, Typography } from "@mui/material";



const Home = () => {
  return (
    <div className="w-full h-full px-4 py-2">
      <h1 className="text-3xl underline">این یک میز کار است</h1>
      <Typography variant="h4">سلام، خوش آمدید!</Typography>
      <Button variant="contained" color="primary">
        کلیک کنید
      </Button>
    </div>
  );
};

export default Home;
