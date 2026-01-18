import axios from "axios";

github_axios=axios.create({
    baseURL:"https://api.github.com"
})

export default github_axios