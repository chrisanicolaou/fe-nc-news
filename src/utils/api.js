import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-backend-project.herokuapp.com/api",
});

export const getReq = async (path) => {
  const res = await newsApi.get(path);
  return res.data;
};
