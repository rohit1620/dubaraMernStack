const express=require("express");

const router=express.Router();

// router.get('/',(req,res)=>{
//     res.status(200).send("This is auth router page")
// })

router.route("/").get((req,res)=>{
    res.status(200).send("This is auth router page")
})


router.route('/contact').get((req,res)=>{
    res.status(200).send("This is Contact page")
})

module.exports=router;
