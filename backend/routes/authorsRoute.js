const { Router } = require("express");
const { getAuthorDetails } = require("../controllers/authorsController");

const router = Router();

router.get("/:name", getAuthorDetails);

module.exports = router;