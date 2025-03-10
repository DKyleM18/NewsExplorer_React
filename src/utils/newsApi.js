import { request } from "./api";

const apiKey = "34f078d982d34b3e85336be8d6660dac";

export const baseUrl = import.meta.env.PROD
  ? import.meta.env.VITE_API_BASE_URL_PROD
  : import.meta.env.VITE_API_BASE_URL_DEV;

export function getNewsItems(keyword) {
  const currentDate = new Date();
  const fromDate = new Date();
  fromDate.setDate(currentDate.getDate() - 7);

  const url = `${baseUrl}?q=${keyword}&apiKey=${apiKey}&from=${fromDate.toISOString()}&to=${currentDate.toISOString()}&pageSize=100`;

  return request(url);
}
