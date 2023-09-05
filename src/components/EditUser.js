import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux/components/User/actions";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formdata, setFormdata] = useState({
    ...location.state,
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleEditSubmit = () => {
    dispatch(updateUser(formdata));
    navigate("/");
  };
  return (
    <Box>
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
