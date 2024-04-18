const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Types.ObjectId,
    },
    userId: {
        type: mongoose.Types.ObjectId,
    },
    userName: {
        type: String,
        required: false,
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