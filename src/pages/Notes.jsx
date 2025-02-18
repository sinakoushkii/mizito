import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Notes = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState({
    title: "",
    caption: "",
    background: "white",
  });
  //   const [noteBackground, setNoteBackground] = useState("");

  const noteBackgroundColors = [
    "white",
    "#f5206e",
    "#09b82f",
    "royalblue",
    "#e3d802",
    "pink",
    "gray",
  ];

  const noteTitleHandler = (event) => {
    event.preventDefault();
    setNote({ ...note, title: event.target.value });
  };

  const noteCaptionHandler = (event) => {
    event.preventDefault();
    setNote({ ...note, caption: event.target.value });
  };

  const backgroundHandler = (event, color) => {
    event.preventDefault();
    setNote({ ...note, background: color });
  };

  const noteSubmitHandler = (event) => {
    event.preventDefault();
    console.log(note);
  };

  return (
    <div className="border-2 border-black w-full h-full mt-32">
      <div
        style={{ backgroundColor: note.background ? note.background : "white" }}
        className={`flex flex-col items-center justify-start mx-auto border max-w-[700px] mt-12 shadow-lg rounded-lg transition-all duration-300 h-16 focus-within:min-h-[320px]  ${isFocused ? "h-[320px]" : "h-16"} overflow-hidden `}
        onFocus={() => setIsFocused(true)} // 🔹 Expand when input is focused
        onBlur={(e) => {
          // 🔹 Collapse only if focus moves outside the container
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsFocused(false);
          }
        }}
        tabIndex={-1} // 🔹 Allows the div to receive focus when clicking inside
      >
        <div className="flex flex-col items-start w-full px-4 py-3 focus:outline-none">
          <TextField
            id="outlined-basic"
            placeholder="عنوان یادداشت"
            variant="outlined"
            fullWidth
            sx={{
              "& fieldset": { border: "none" }, // Removes the border
              marginBottom: "20px",
            }}
            value={note.title}
            onChange={(e) => noteTitleHandler(e)}
          />
          {/* {note.title?null:<p className="text-red-500 text-[12px]">لطفا عنوان را وارد کنید</p>} */}
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
            value={note.caption}
            onChange={(e) => noteCaptionHandler(e)}
          />
          <div className="flex items-center justify-center gap-2">
            {noteBackgroundColors.map((color) => {
              return (
                <div
                  key={color}
                  style={{ backgroundColor: color }}
                  className={`h-[28px] w-[20px] rounded-full cursor-pointer border-2 border-gray-300 hover:border-black px-3 py-1`}
                  onClick={(event) => backgroundHandler(event, color)}
                ></div>
              );
            })}
          </div>

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
