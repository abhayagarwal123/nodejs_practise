
const mongoose = require("mongoose")

//define person schema
const personSchema = new mongoose.Schema({
    username:{
        type :String,
        required:true,
         unique: true
    },
    password:{
        type :String,
        required:true
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number
    },
    work: {
        type: String, enum: ['chef', 'waiter', 'manager'],
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    salary: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

//create model
const person=mongoose.model('person',personSchema);
module.exports=person