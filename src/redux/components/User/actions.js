import { ADD_USER, GET_USERS } from "./actionTypes";

export const getUsers = () => {
  return {
    type: GET_USERS,
  };
};
export const addUser = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};
