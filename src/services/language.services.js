import gitfetch from "../utils/github.axios.js";

const dummyRepos = ["Backend_learning", "chat-app"];
const dummyLang = { JavaScript: "86.5", CSS: "0.2", HTML: "0.3", python: "10", rust: "2", node: "1" };

const getRepos = async (username) => {
  if (!process.env.GITHUB_TOKEN) {
    console.log("no token, using dummy repos for", username);
    return dummyRepos;
  } else {
    console.log("token present, trying to fetch repos")
    try {
      const { data } = await gitfetch.get(`/users/${username}/repos`);
      console.log("fetch successful")
      return data.map((chunk) => chunk.name);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("token invalid, using dummy repos");
        return dummyRepos;
      } else {
        console.log(error);
        return [];
      }
    }
  }
};
const languageData = async (username, repoName) => {
  if (!process.env.GITHUB_TOKEN) {
    console.log("no token, using dummy language data for", repoName);
    return dummyLang;
  } else {
    try {
      const language = await gitfetch.get(
        `repos/${username}/${repoName}/languages`,
      );
      console.log("language fetch successful for", repoName);
      return language.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("token invalid, using dummy language data for", repoName);
        return dummyLang;
      } else {
        console.log(error);
        return {};
      }
    }
  }
};
const createPercentage = async (username) => {
  console.log("on create percentage")
  let repos = await getRepos(username);
  console.log(repos)
  if (repos.length === 0) return {};
  const totalLanguages = {};

  // loop through repos sequentially
  const less=Math.min(repos.length,) // limit to 20 repos to avoid hitting rate limits and for better performance
  repos= repos.slice(0,less) // limit to 20 repos to avoid hitting rate limits and for better performance
  for (const repo of repos) {
    const langObj = await languageData(username, repo); // await each call
    for (const lang in langObj) {
      const val = Number(langObj[lang]);
      if (totalLanguages[lang]) {
        totalLanguages[lang] += val;
      } else {
        totalLanguages[lang] = val;
      }
    }
  }
  var total = 0;
  const val = Object.values(totalLanguages);
  for (const value of val) {
    total += value;
  }
  var language_percent = {};
  for (const lang in totalLanguages) {
    const percentage = Math.round((totalLanguages[lang] / total) * 1000) / 10;
    language_percent[lang] = percentage;
  }
  return language_percent; // combined language usage
};

export { getRepos, languageData, createPercentage};
