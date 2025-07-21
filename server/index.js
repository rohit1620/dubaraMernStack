const express=require("express");
const router=require("./router/auth-router")
const app=express();
const connetDB=require("./utility/db")

app.use(express.json())
app.use("/api/auth",router)

// app.get("/",(req,res)=>{
//     res.status(200).send("Hello Ajeet Boss");
// });

app.route('/').get((req,res)=>{
    res.status(200).send("Hello Home page")
})


const PORT=5000;

connetDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`server is running at port: ${PORT}`);
    
})})
