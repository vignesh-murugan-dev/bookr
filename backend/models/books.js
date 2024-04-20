const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
    bookId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: [{
        type: mongoose.Types.ObjectId,
        ref: "Authors"
    }],
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: [{ type: String }],
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    // aboutAuthor: {
    //     type: String,
    //     required: true,
    // },
    // authorImgUrl: {
    //     type: String,
    //     required: true,
    // },
    bookImgUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const BooksModel = mongoose.model("Books", BooksSchema);
module.exports = {BooksModel}