//import express from "express";

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const app = express();


dotenv.config();

const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postRoute = require("./routes/posts")

mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Mongodb Connected...");
    })
    .catch((e)=> console.log('Mongodb Connection Error:' ,e ) );

//middleware

app.use(express.json());
app.use(cors());
app.use(helmet())
app.use(morgan("common"))

app.listen(8800,()=> {
    console.log("Backend Server Running!");
})

app.use("/api/users", userRoute)

app.use("/api/auth", authRoute)

app.use("/api/posts", postRoute)