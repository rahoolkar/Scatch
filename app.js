const express = require("express"); //requiring the node js core module by using require method
const app = express();
const mongoose = require('mongoose');
const Product = require("./models/product");
const User = require("./models/user");

mongoose.connect('mongodb://127.0.0.1:27017/shop')
.then(()=>{
    console.log("mongoose connected");
})
.catch((error)=>{
    console.log(error);
});


app.get("/",(req,res)=>{
    res.send("working");
})

app.listen(8080,()=>{
    console.log("server is running")
})