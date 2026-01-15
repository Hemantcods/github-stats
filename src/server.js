import app from './app.js'
const port = 3000

app.get('/', (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");  
  console.log("server is running")
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


