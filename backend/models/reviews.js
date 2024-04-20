const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
    bookId: {
        type: Number,
    },
    userId: {
        type: Number,
        required: false,
    },
    userName: {
        type: String,
    },
    rating: {
        type: Number
    },
    review: {
        type: String,
    }
})

const ReviewsModel = mongoose.model("Reviews", ReviewsSchema);
module.exports = {ReviewsModel}