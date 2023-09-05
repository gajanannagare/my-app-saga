import React, { useEffect, useState } from "react";
import { deleteUser, getUsers } from "../redux/components/User/actions";
import { useDispatch, useSelector } from "react-redux";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router";
import CustomDialog from "./CustomDialog";

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [dialogTitle, setDialogTitle] = useState("");

  const usersData = useSelector((state) => state.userReducer.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const handleDelete = (id) => {
    setDialogTitle("Are you sure you want to delete this user?");
    setDeleteId(id);
    setIsOpen(true);
  };
  const handleYesClick = () => {
    dispatch(deleteUser(deleteId));
    setIsOpen(false);
  };
  const handleNoClick = () => {
    setIsOpen(false);
  };
  const handleUpdate = (data) => {
    navigate("edit-user", { state: data });
  };
  return (
    <Box sx={{ marginTop: "20px" }}>
      {isOpen && (
        <CustomDialog
          handleYesClick={handleYesClick}
          handleNoClick={handleNoClick}
          dialogTitle={dialogTitle}
        />
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "15px", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontSize: "15px", fontWeight: "bold" }}>
                Username
              </TableCell>
              <TableCell sx={{ fontSize: "15px", fontWeight: "bold" }}>
                Phone
              </TableCell>
              <TableCell sx={{ fontSize: "15px", fontWeight: "bold" }}>
                Website
              </TableCell>
              <TableCell sx={{ fontSize: "15px", fontWeight: "bold" }}>
                Edit/Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersData.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.username}</TableCell>
                <TableCell>{data.phone}</TableCell>
                <TableCell>{data.website}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleUpdate(data)}
                    sx={{ marginRight: "5px" }}
                    variant="contained"
                    color="primary"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(data.id)}
                    variant="contained"
                    color="error"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default User;
