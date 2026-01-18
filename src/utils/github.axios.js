import axios from "axios";

github_axios=axios.create({
    baseURL:"https://api.github.com",
    headers: {
    Accept: "application/vnd.github+json",
  },
})

export default github_axios