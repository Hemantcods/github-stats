import axios from "axios";

const github_axios = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    // Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
});
// Interceptor to catch errors and return full info
axios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(error.response && error.response.data) ||
    "something went wrong",
);
export default github_axios;
