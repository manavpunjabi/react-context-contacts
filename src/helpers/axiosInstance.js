import axios from "axios";

// eslint-disable-next-line
export default (history = null) => {
  const baseURL = process.env.REACT_APP_BACKEND_URL;
  console.log("🚀 ~ file: axios.js ~ line 4 ~ baseURL", baseURL);

  let headers = {};

  if (localStorage.token) {
    headers["Authorization"] = `Bearer ${localStorage.token}`;
  }

  const axiosInstance = axios.create({
    baseURL,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) => new Promise((resolve, reject) => resolve(response)),
    (error) => {
      if (!error.response) {
        return new Promise((_, reject) => reject(error));
      }
      if (error.response.status === 403) {
        localStorage.removeItem(`token`);
        if (history) {
          history.push(`/auth/login`);
        } else {
          window.location = `/auth/login`;
        }
      } else {
        return new Promise((_, reject) => reject(error));
      }
    }
  );

  return axiosInstance;
};
