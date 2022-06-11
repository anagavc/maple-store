import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";
import React from "react";

const Notifications = ({ open, setOpen, type }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          className="bg-gold text-pry-100 mt-48"
          severity={
            type === "copy"
              ? "info"
              : type === "remove"
              ? "error"
              : type === "remind"
              ? "warning"
              : "success"
          }
          variant="filled"
        >
          {type === "add"
            ? "Successfully added!"
            : type === "update"
            ? "Successfully updated!"
            : type === "remove"
            ? "Successfully removed!"
            : type === "remind"
            ? "Please select size and color first."
            : "Copied to clipboard!"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notifications;
