const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    about: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
})

const AuthorsModel = mongoose.model("Authors", AuthorsSchema);

module.exports = {AuthorsModel};