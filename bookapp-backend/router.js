
const express = require("express");
const router = express.Router();
const bookrouter = require("./bookschema");

router.get("/",(req,res)=>{
    res.json("router working")
})
module.exports = router;