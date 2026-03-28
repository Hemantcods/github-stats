import dotenv from "dotenv";
dotenv.config();
import app from './app.js';

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  console.log("server is running");
  res.send("Hello World!");
});

// Only start the server if not running on Vercel (local development)
// Vercel will use the exported app as a serverless function
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export default app;


