import express from "express"
import statsrouter from "./routes/stats.router.js"
const app=express()
// routing
app.use("/stats",statsrouter)

export default app;