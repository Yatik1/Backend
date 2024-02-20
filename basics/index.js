const express = require("express")
require('dotenv').config()

const app = express()
// const port = 3000

app.get("/" , (req,res) => {
    res.send("Server is on ! ")
})

app.get("/info" , (req,res) => {
    res.send('<h2>My name is Yatik Srivastava </h2>')
})

app.listen(process.env.PORT , ()=> {
    console.log(`Server is on ${process.env.PORT} PORT`);
})