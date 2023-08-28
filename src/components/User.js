import React, { useEffect } from "react";
import { getUsers } from "../redux/components/User/actions";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const usersData = useSelector((state) => state.userReducer.users);
  console.log(usersData);
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <div>User</div>;
};

export default User;
