import axios from "axios";

const urlBase = "https://hacker-news.firebaseio.com/";

export const baseApi = axios.create({
  baseURL: `${urlBase}/v0`,
});
