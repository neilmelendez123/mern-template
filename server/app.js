require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser");
const { connectMongoDB } = require('./database/mongo')
connectMongoDB();
const userRoutes = require("./routes/authRoutes.js");

const app = express()
app.use(bodyParser.json());

const port = process.env.PORT

app.use("/auth", userRoutes);

app.listen(port, ()=>{
    console.log(`started server on port ${port}`)
})


