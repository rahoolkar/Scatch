const express = require("express"); //requiring the node js core module by using require method
const app = express();
const mongoose = require('mongoose');
const Product = require("./models/product");
const User = require("./models/user");
const owners = require("./routes/owners");
const products = require("./routes/products");
const users = require("./routes/users");

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

app.use("/owners",owners);
app.use("/products",products);
app.use("/users",users);

app.listen(3000,()=>{
    console.log("server is running")
})