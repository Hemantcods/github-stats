import gitfetch from "../utils/github.axios.js";

import { getRepo } from "../../data/data.dummy.js";

const getRepos = async (username) => {
  if (getRepo) {
    return getRepo;
  } else {
    try {
      const { data } = await gitfetch.get(`/users/${username}/repos`);
      return data.map((chunk) => chunk.name);
    } catch (error) {
      console.log(error);
    }
  }
};
const languageData = async (username, repoName) => {
  const language = await gitfetch.get(
    `repos/${username}/${repoName}/languages`,
  );
  return language.data;
};

const createPercentage = async (username) => {
  const repos = await getRepos(username);
  if (repos.length === 0) return {};
  const totalLanguages = {};

  // loop through repos sequentially
  for (const repo of repos) {
    const langObj = await languageData(username, repo); // await each call
    for (const lang in langObj) {
      if (totalLanguages[lang]) {
        totalLanguages[lang] += langObj[lang];
      } else {
        totalLanguages[lang] = langObj[lang];
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
    const percentage = ((totalLanguages[lang] / total) * 100).toFixed(1);
    language_percent[lang] = percentage;
  }
  return language_percent; // combined language usage
};

export { getRepos, languageData, createPercentage };
