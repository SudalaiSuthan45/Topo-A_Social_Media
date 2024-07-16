//import express from "express";

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const multer = require("multer");
const path = require("path");

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
app.use(helmet())
app.use(morgan("common"))

app.listen(8800,()=> {
    console.log("Backend Server Running!");
})

app.use("/api/users", userRoute)

app.use("/api/auth", authRoute)

app.use("/api/posts", postRoute)


// Enable CORS for all routes
app.use(cors());


// Set Cross-Origin-Resource-Policy header
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  next();
});


//multer

app.use("/images", express.static(path.join(__dirname, "public/images")));

// app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: ( req, file, cb ) => {
        cb ( null, "public/images");
    },
    
    filename : ( req, file, cb) =>{
        cb( null, req.body.filename);
    },
});

const upload = multer({storage});

app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("File Uploaded Successfully..");
    }catch(err){
        console.log(err);
    }
})
