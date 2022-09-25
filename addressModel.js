const mongoose = require('mongoose');
const emailValidator = require('email-validator');

let db_link = 'mongodb+srv://admin:FU0tu1dQI6sIOlds@cluster0.zmpyyt6.mongodb.net/?retryWrites=true&w=majority'

const conn = async ()=> { 
    try {
        await mongoose.connect(db_link);
        console.log('db connected');
    } catch (err) {
        console.log(err);
    }
    
};
conn();

const addressSchema = mongoose.Schema({
    name:{
        type: String,
        //required: true
    },
    email:{
        type: String,
        //required: true,
        unique: true,
        // validate: ()=>{
        //     return emailValidator.validate(this.email);
        // }
    },
    phoneNo:{
        type: Number,
        //required: true
    },
    place:{
        type: String,
        //required: true
    }
});

const addressModel = mongoose.model('addressModel',addressSchema,'addressModel');

module.exports = addressModel;