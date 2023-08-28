import { GET_USERS_ASYNC } from "./actionTypes";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_ASYNC:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
