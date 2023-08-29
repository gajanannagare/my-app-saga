import axios from "axios";

export const getApiCall = (url) => {
  return axios.get(url).then((res) => res.data);
};

export const postApiCall = (url, param) => {
  return axios.post(url, param).then((res) => res.data);
};
