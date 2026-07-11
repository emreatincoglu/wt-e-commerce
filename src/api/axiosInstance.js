import axios from "axios";

const instance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});

export const setAuthToken = (token) => {
  if (token) {
    instance.defaults.headers.common.Authorization = token;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};

export default instance;