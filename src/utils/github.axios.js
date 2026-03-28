import dotenv from "dotenv";
dotenv.config()
import axios from "axios";

const github_axios = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});
// Interceptor to catch errors and return full error object
github_axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
export default github_axios;
