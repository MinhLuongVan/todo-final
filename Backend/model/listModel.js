const mongoose = require("mongoose");
const User = require("../model/userModel")
const Schema = mongoose.Schema;
const ListSchema = new Schema({
    title:{
        type : String,
        }, 
    status: {
        type:Boolean,
        default:false
    },  
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
        } 
},
 {timestamps: true}
);
module.exports = mongoose.model("ListTD",ListSchema);


