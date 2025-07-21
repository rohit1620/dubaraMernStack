const mongoose = require("mongoose");

// const URI="mongodb://127.0.0.1:27017/mernd";

const URI = process.env.MONGODB_URI;

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