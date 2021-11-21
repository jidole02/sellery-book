import axios, { AxiosError } from "axios";
import { DOMAIN } from "./export";

const instance = axios.create({
  baseURL: "https://dashboard.heroku.com/apps/booksellery",
  timeout: 100000,
});
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
export default instance;
