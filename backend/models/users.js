const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
})

const UsersModel = mongoose.model("Users", UsersSchema);
module.exports = {UsersModel}