import axios from "axios";
import { clearSotrage, getAccessToken } from "./storage";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const request = axios.create({
  baseURL: BASE_URL,
});

request.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `JWT ${accessToken}`;
    }
    if (!config.headers["Content-Type"]){
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  },
  (err) => Promise.reject(err)
);

request.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log('ddddddddddddddd')
    if (err.response.status === 401) {
      clearSotrage();
      console.log('41011111111')
      if (
        window.location.pathname !== "/signUp" &&
        window.location.pathname !== "/logIn"
      ) {
        window.location.pathname = "/logIn";
      }
      return;
    }
    throw err;
  }
);

export default request;
