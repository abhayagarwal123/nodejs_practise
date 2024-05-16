
const mongoose=require("mongoose");

const dotenv=require("dotenv").config()

//defining connection url


const mongourl=process.env.MONGODB_URL



//set up connection
mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on("connected",()=>{
    console.log("connected to mongodb server");
})
db.on("disconnected",()=>{
    console.log("disconnected to mongodb server");
})
db.on("error",(err)=>{
    console.log("error in mongodb server: ",err);
})

//export to server 
module.exports=db