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
        console.log(req.body);
        res.status(200).json({message:req.body})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={home,register,contact}



