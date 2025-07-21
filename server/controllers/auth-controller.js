const User = require('../models/user-model')

const home=async(req,res)=>{
    try {
        res.status(200).send("This is route home page again")
    } catch (error) {
        console.log(error);
        
    }
   
}

const contact=async(req,res)=>{
    try {
         res.status(200).send("This is Contact page")
    } catch (error) {
        console.log(error);
        
    }
   
}

const register=async(req,res)=>{
    try {
       const {username,email,phone,password}=req.body;

    //    const userExist= await User.findOne({email:email});
    //    console.log("email",userExist);
       
    //    if(userExist){
    //     return res.status(400).json({msg:"email already exist"});
    //    }
    const raw= await User.create({username,email,phone,password});
  console.log(raw)
raw.save()
      res.status(200).json({msg:"data user"})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={home,register,contact}



