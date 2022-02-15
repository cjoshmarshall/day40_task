const router=require("express").Router();

const fs=require("fs");



router.post("/",(req,res)=>{
    console.log(req.body)
    res.send("post")

})

module.exports=router;