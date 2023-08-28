import axios from "axios";

export const getApiCall = (url) => {
  return axios.get(url).then((res) => res.data);
};
