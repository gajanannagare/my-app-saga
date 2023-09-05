import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/components/User/actions";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import CustomDialog from "./CustomDialog";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [formdata, setFormdata] = useState({
    ...location.state,
  });
  const [isOpen, isSetOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleEditSubmit = () => {
    setDialogTitle("Are you sure you want to update this user?");
    isSetOpen(true);
  };
  const handleYesClick = () => {
    dispatch(updateUser(formdata));
    isSetOpen(false);
    navigate("/");
  };
  const handleNoClick = () => {
    isSetOpen(false);
  };
  return (
    <Box>
      {isOpen && (
        <CustomDialog
          dialogTitle={dialogTitle}
          handleYesClick={handleYesClick}
          handleNoClick={handleNoClick}
        />
      )}
      <Box marginTop="20px">
        <Box sx={{ padding: "10px" }}>
          <TextField
            name="name"
            label="Enter name"
            value={formdata.name}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ padding: "10px" }}>
          <TextField
            name="username"
            label="Enter username"
            value={formdata.username}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ padding: "10px" }}>
          <TextField
            name="phone"
            label="Enter phone"
            value={formdata.phone}
            onChange={handleChange}
          />
        </Box>
        <Box sx={{ padding: "10px" }}>
          <TextField
            name="website"
            label="Enter website"
            value={formdata.website}
            onChange={handleChange}
          />
        </Box>
      </Box>
      <Box>
        <Button
          onClick={handleEditSubmit}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Edit User
        </Button>
      </Box>
    </Box>
  );
};

export default EditUser;
