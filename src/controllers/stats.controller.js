import { percentSvg, DefaultSvg } from "../renderers/svg.renderer.js";
import { createPercentage } from "../services/language.services.js";
import { getSvgCache, setSvgCache } from "../utils/cache.js";

const createStats = async (req, res) => {
  const { username } = req.params;
  res.setHeader("Content-Type", "image/svg+xml");
  console.log("request for", username);

  const cached = getSvgCache(username);
  if (cached) {
    // Data is ready: send cached SVG with caching headers
    res.setHeader("Cache-Control", "public, max-age=600, s-maxage=600");
    return res.send(cached);
  }
  console.log("cache miss for", username);

  // Data not ready: send loading SVG immediately with NO caching
  // This ensures loading placeholder won't be cached and will be fetched fresh each time
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  const loadingSvg = DefaultSvg();
  res.send(loadingSvg);

  // Fetch data in background to populate cache for future requests
  createPercentage(username).then(language_percent => {
    const svg = percentSvg(language_percent);
    setSvgCache(username, svg);
    console.log("cached stats for", username);
  }).catch(err => {
    console.error("failed to fetch stats in background:", err);
  });
};

export { createStats };
