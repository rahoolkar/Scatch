const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    username : String,
    email : String,
    password : String,
    products : [
        {
            type : Schema.Types.ObjectId,
            ref : "Product"
        }
    ],
    contact : Number,
    picture : String
})

const Owner = mongoose.model("Owner",ownerSchema);

module.exports = Owner;