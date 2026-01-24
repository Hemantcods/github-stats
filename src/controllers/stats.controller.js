import { percentSvg } from "../renderers/svg.renderer.js";
import { createPercentage } from "../services/language.services.js";
import { getSvgCache, setSvgCache } from "../utils/cache.js";

const createStats = async (req, res) => {
  const { username } = req.params;
  res.setHeader("Content-Type", "image/svg+xml");
//   http caching telling browser to store the response
  res.setHeader("Cache-Control", "public, max-age=600, s-maxage=600");
  const cached = getSvgCache(username);
  if (cached) return res.send(cached);
  const language_percent = await createPercentage(username);
  const svg = percentSvg(language_percent);
  setSvgCache(username, svg);
  // console.log(language_percent)
  return res.send(svg);
};

export { createStats };
