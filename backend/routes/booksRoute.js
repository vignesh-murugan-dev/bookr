const { Router } = require("express");
const { getAllBooks, getBookWithId, getBooksList } = require("../controllers/booksController");

const router = Router();

router.get("/", getAllBooks);
router.get("/:bookId", getBookWithId);
router.get("/find/:searchInput", getBooksList);

module.exports = router;