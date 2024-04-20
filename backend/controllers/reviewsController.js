const { ReviewsModel } = require("../models/reviews")

async function submitUserReview(req, res) {
    const bookId = req.params.bookId;
    const { userId, userReview, userRating, userName } = req.body;
    try {
        const review = await ReviewsModel.create({
            bookId,
            userId,
            review: userReview,
            rating: userRating,
            userName
        })
        res.status(201).json({message: "Review added successfully"});
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function getAllReviews(req, res) {
    const bookId = req.params.bookId;
    try {
        const reviews = await ReviewsModel.find({
            bookId
        })
        const updatedReviews = reviews.map((review) => {return {...review.toObject(), userImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"} })
        res.json({reviews: updatedReviews})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = { submitUserReview, getAllReviews }