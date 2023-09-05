import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@mui/material";
const CustomDialog = (props) => {
  const handleYesAction = () => {
    props.handleYesClick();
  };
  const handleNoAction = () => {
    props.handleNoClick();
  };
  return (
    <Dialog open={true}>
      <DialogTitle> </DialogTitle>
      <DialogContent>
        <Typography>{props.dialogTitle}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleNoAction} variant="contained">
          No
        </Button>
        <Button onClick={handleYesAction} variant="contained" color="error">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
