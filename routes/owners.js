const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("owner is working");
})

module.exports = router;