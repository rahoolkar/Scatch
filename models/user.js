const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    username : String,
    email : String,
    password : String,
    cart : [
        {
            type : Schema.Types.ObjectId,
            ref : "Product"
        }
    ],
    isAdmin : Boolean,
    orders : [
        {
            type : Schema.Types.ObjectId,
            ref : "Product"
        }
    ],
    contact : Number,
    picture : String
})

const User = mongoose.model("User",userSchema);

module.exports = User;