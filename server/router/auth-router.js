const express=require("express");
// const {home,register,contact} = require("../controllers/auth-controller")
const authControllers = require("../controllers/auth-controller")
const router=express.Router();



// router.get('/',(req,res)=>{
//     res.status(200).send("This is auth router page")
// })

// router.route("/").get((req,res)=>{
//     res.status(200).send("This is auth router page")
// })

router.route('/').get(authControllers.home)
router.route('/contact').get(authControllers.contact)
router.route("/register").post(authControllers.register)

module.exports=router;
