import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/components/User/actions";
import { useNavigate } from "react-router";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    username: "",
    phone: "",
    website: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handleAddUser = () => {
    let param = { ...formdata };
    dispatch(addUser(param));
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
          onClick={handleAddUser}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Save User
        </Button>
      </Box>
    </Box>
  );
};

export default AddUser;
