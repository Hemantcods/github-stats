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

  try {
    // Fetch data synchronously (wait for it) before responding
    const language_percent = await createPercentage(username);
    const svg = percentSvg(language_percent);

    // Cache the result for future requests
    setSvgCache(username, svg);
    console.log("cached stats for", username);

    // Send the actual stats SVG with caching headers
    res.setHeader("Cache-Control", "public, max-age=600, s-maxage=600");
    res.send(svg);
  } catch (error) {
    console.error("failed to fetch stats:", error);
    // On error, send loading/error placeholder (no cache)
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    const errorSvg = DefaultSvg();
    res.send(errorSvg);
  }
};

export { createStats };
