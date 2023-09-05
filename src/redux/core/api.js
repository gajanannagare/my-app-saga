import axios from "axios";

export const getApiCall = (url) => {
  return axios.get(url).then((res) => res.data);
};

export const postApiCall = (url, param) => {
  return axios.post(url, param).then((res) => res.data);
};

export const deleteApiCall = (url) => {
  return axios.delete(url).then((res) => res.data);
};

export const updateApiCall = (url, param) => {
  return axios.put(url, param).then((res) => res.data);
};
