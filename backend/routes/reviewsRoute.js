const { Router } = require("express");
const { submitUserReview, getAllReviews } = require("../controllers/reviewsController");

const router = Router();

router.get("/books/:bookId", getAllReviews)
router.post("/submit/:bookId", submitUserReview);

module.exports = router;