import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Notes = () => {
  const [note, setNote] = useState({ title: "", caption: "" });

  const noteTitleHandler = (event) => {
    event.preventDefault();
    setNote({ ...note, title: event.target.value });
  };
  
  const noteCaptionHandler = (event) => {
    event.preventDefault();
    setNote({ ...note, caption: event.target.value });
  };

  const noteSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="border-2 border-black w-full h-full mt-32">
      <div className="flex flex-col items-center justify-start mx-auto border max-w-[700px] mt-12 shadow-lg rounded-lg">
        <div className="flex flex-col items-start w-full px-4 py-3">
          <TextField
            id="outlined-basic"
            placeholder="عنوان یادداشت"
            variant="outlined"
            fullWidth
            sx={{
              "& fieldset": { border: "none" }, // Removes the border
              marginBottom: "20px",
            }}
            onChange={(e) => noteTitleHandler(e)}
          />
          <TextField
            placeholder="یادداشت خود را بنویسید..."
            variant="outlined"
            multiline
            rows={4} // Number of visible rows
            fullWidth
            sx={{
              "& fieldset": { border: "none" }, // Removes the border
              marginBottom: "20px",
            }}
            onChange={(e) => noteCaptionHandler(e)}
          />
          <Button
            className="self-end"
            variant="contained"
            color="primary"
            onClick={noteSubmitHandler}
          >
            ایجاد
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
