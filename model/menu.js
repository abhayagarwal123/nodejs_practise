const mongoose = require("mongoose")

//define person schema
const menuSchema = new mongoose.Schema({
    dish: {
        type: String,
        required: true,
    },
    price: {
        type: Number
    },
    ingredient: {
        type: [String],
        required: true,
    },
    islactose: {
        type: Boolean,
        default: false,
    },
   
});

//create model
const menu=mongoose.model('menu',menuSchema);
module.exports=menu