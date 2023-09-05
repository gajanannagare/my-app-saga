import { ADD_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "./actionTypes";

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

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};

export const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload: data,
  };
};
