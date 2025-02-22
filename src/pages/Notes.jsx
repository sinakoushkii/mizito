import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import BasicSpeedDial from "../components/BasicSpeedDial";
import { Box } from "@mui/system";

const Notes = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [note, setNote] = useState({
    title: "",
    caption: "",
    background: "white",
  });
  const [notes, setNotes] = useState([]); // State to store notes

  // Load notes from localStorage when component mounts
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever notes array changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const noteBackgroundColors = [
    "white",
    "#ff8a80", //red
    "#ccff90", //green
    "#80d8ff", // blue
    "#ffd180", // orange
    "#a7ffeb", // light green
    "#cfd8dc", // gray
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
    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    setNote({ title: "", caption: "", background: "white" });
  };

  //Remove note function
  const deleteNoteHandler = (index) => {
    setIsFocused(false);
    const updatedNotes = notes.filter((_, i) => i !== index); // Remove clicked note
    setNotes(updatedNotes);
  };

  return (
    <div className="w-full h-full md:pt-32 px-4 pb-8 overflow-auto border-4 border-red-500">
      <div
        style={{ backgroundColor: note.background ? note.background : "white" }}
        className={`flex flex-col items-center justify-start mx-auto border max-w-[700px] mt-12 shadow-lg rounded-lg transition-all duration-300 h-16 focus-within:min-h-[320px]  ${
          isFocused ? "h-[360px]" : "h-[64px]"
        } overflow-hidden `}
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
            sx={{ marginTop: "2rem" }}
          >
            ایجاد
          </Button>
        </div>
      </div>
      {/* Render Notes */}
      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {notes.map((n, index) => (
          <div
            key={index}
            style={{ backgroundColor: n.background }}
            className="relative border rounded-lg shadow-md p-4 w-[250px] h-max"
          >
            <h3 className="text-lg font-semibold mb-3">{n.title}</h3>
            <p className="text-sm text-gray-700">{n.caption}</p>
            {/* Delete Button */}
            <div className="flex items-center gap-2 mt-4 border-2 border-black">
              <IconButton
                onClick={() => deleteNoteHandler(index)}
                size="small"
                sx={{ color: "black", marginTop: "1rem" }}
              >
                <DeleteIcon />
              </IconButton>
              {/* <Box>
                <BasicSpeedDial />
              </Box> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
