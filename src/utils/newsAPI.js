import { request } from "./api";

const currentDate = new Date().toJSON().slice(0, 10);

const lastWeek = new Date();

export const getNews = (query, APIkey) => {
  return request(
    `https://newsapi.org/v2/everything?q=${query}&from=${lastWeek}&to=${currentDate}&pageSize=100&apikey=${APIkey}`
  );
};
