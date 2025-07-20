const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    res.status(200).send("Hello Ajeet Boss");
});

app.get("/about",(req,res)=>{
    res.status(200).send("This is about Page")
})

const PORT=5000;

app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT}`);
    
})