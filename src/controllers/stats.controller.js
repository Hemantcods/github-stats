import { percentSvg, DefaultSvg } from "../renderers/svg.renderer.js";
import { createPercentage } from "../services/language.services.js";
import { getSvgCache, setSvgCache } from "../utils/cache.js";

const createStats = async (req, res) => {
  const { username } = req.params;
  res.setHeader("Content-Type", "image/svg+xml");
//   http caching telling browser to store the response
  res.setHeader("Cache-Control", "public, max-age=600, s-maxage=600");
  console.log("request for",username)
  const cached = getSvgCache(username);
  if (cached) {
    return res.send(cached);
  }
  console.log("cache miss for",username)

  // Send loading placeholder immediately
  const loadingSvg = DefaultSvg();
  res.send(loadingSvg);

  // Fetch data in background to populate cache for future requests
  createPercentage(username).then(language_percent => {
    const svg = percentSvg(language_percent);
    setSvgCache(username, svg);
    console.log("cached stats for", username);
  }).catch(err => {
    console.error("failed to fetch stats in background:", err);
    // Cache remains empty, next request will also get loading placeholder
  });
};

export { createStats };
