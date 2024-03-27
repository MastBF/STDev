import axios from 'axios';
import {
  clearStorage,
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
} from './storage';
import { refresh } from 'api/constants';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const request = axios.create({
  baseURL: BASE_URL,
});

let isRefreshed = false;
let subscribers = [];

function addSubscriber(callback) {
  subscribers.push(callback);
}

async function tokenRefresh() {
  try {
    isRefreshed = true;
    const refreshToken = getRefreshToken();
    const response = await axios.post(refresh(BASE_URL), {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;
    const newRefreshToken = response.data.refresh;
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    callSubscribers(newAccessToken);
    subscribers = [];
    isRefreshed = false;
  } catch (err) {
    console.log(err);
    window.location.pathname = '/logIn';
    clearStorage();
  }
}

function callSubscribers(access) {
  subscribers.forEach((callback) => callback(access));
}

request.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `JWT ${accessToken}`;
    }

    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }
    return config;
  },
  (err) => Promise.reject(err),
);

request.interceptors.response.use(
  (response) => response,
  async (err) => {
    if (
      err.response.status === 401 &&
      window.location.pathname !== '/signUp' &&
      window.location.pathname !== '/logIn'
    ) {
      const refreshToken = getRefreshToken();

      if (!refreshToken) {
        window.location.pathname = '/logIn';
        clearStorage();
        return;
      }
      try {
        console.log(err.config);
        if (!isRefreshed) {
          tokenRefresh();
        }
        return new Promise((resolve) => {
          const callback = (access) => {
            const originalRequest = err.config;
            originalRequest.headers.Authorization = `JWT ${access}`;
            resolve(axios(originalRequest));
          };
          addSubscriber(callback);
        });
      } catch (err) {
        window.location.pathname = '/logIn';
        clearStorage();
        return;
      }
    }
    throw err;
  },
);

export default request;
