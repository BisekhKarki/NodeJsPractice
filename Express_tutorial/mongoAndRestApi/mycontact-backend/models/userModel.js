const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const useSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    username: {
        type: String,
        required: [true, "Please add the user name"]
    },

    email: {
        type: String,
        required: [true, "Please add the user email"],
        unique: [true, "Email address already taken"]
    },
    password: {
        type: String,
        required: [true, "Please add the user password"]
    },
},
{
    Timestamp: true,

}


)

module.exports = mongoose.Model("User", useSchema)