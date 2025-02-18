import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  padding:"20px 30px"
};

const CustomModal = ({ children, title, open, closeModal }) => {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={closeModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col">
            <IconButton className="self-end" onClick={closeModal}>
              <CloseIcon />
            </IconButton>
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              component="h2"
            >
              {title}
            </Typography>
            {children}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default CustomModal;
