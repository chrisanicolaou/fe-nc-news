import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://christos-be-nc-news-example.herokuapp.com/api",
});

export const getReq = async (path) => {
  const res = await newsApi.get(path);
  return res.data;
};

export const patchReq = async (path, dataToPatch) => {
  const res = await newsApi.patch(path, dataToPatch);
  return res.data;
};
