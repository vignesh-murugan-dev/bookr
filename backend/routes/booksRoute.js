const { Router } = require("express");
const { getAllBooks, getBookWithId } = require("../controllers/booksController");

const router = Router();

router.get("/", getAllBooks);
router.get("/:bookId", getBookWithId);

module.exports = router;