const mongoose = require('mongoose');
const mongoURL="mongodb+srv://abhishek.pokhriyal8@gmail.com:IMAbhishek@012345@mycluster.w15ks.mongodb.net/test";

const connectToMongo=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log("Connected to  mongo successfully");
    })    
}

module.exports= connectToMongo;
