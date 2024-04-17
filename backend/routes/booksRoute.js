const { Router } = require("express");
const { getAllBooks } = require("../controllers/booksController");

const router = Router();

router.get("/", getAllBooks);

module.exports = router;