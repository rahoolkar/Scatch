const express = require("express"); //requiring the node js core module by using require method
const app = express();

app.get("/",(req,res)=>{
    res.send("working");
})

app.listen(8080,()=>{
    console.log("server is running")
})