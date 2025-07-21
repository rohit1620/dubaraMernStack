const mongoose = require("mongoose");

// const URI="mongodb://127.0.0.1:27017/mernd";

const URI = "mongodb+srv://malavrohit1620:rohit123%40@cluster0.jfqf10k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connection=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection Successful to DB"); 
    } catch (error) {
        console.error("database connection failed");
        process.exit(0)
    }
}

module.exports=connection;