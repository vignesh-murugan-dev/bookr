const { Router } = require("express");
const { getAuthorByName, getAuthorById } = require("../controllers/authorsController");

const router = Router();

router.get("/:name", getAuthorByName);
router.get("/id/:id", getAuthorById);

module.exports = router;
