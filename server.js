const express = require("express")
const app = express()
require("dotenv").config()

app.use(express.json())

app.get("/", (req, res) => {
  res.send('Hello World, from Docker, this is a change from GitHub Actions!')
})

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
  console.log(`Node JS app listening from http://localhost:${PORT}`)
})