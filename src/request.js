import axios from "axios";
import store from "./store";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}/api/interview`
});

instance.interceptors.request.use(config => {
  const { token } = store.getState().authentication;
  if (token) {
    return {
      ...config,
      headers: {
        token: `${token}`
      }
    };
  }
  return config;
});

export default instance
