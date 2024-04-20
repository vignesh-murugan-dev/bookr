const { AuthorsModel } = require("../models/authors");

async function getAuthorByName(req, res) {
  const name = req.params.name;
  try {
    const author = await AuthorsModel.find({ name });
    res.json({ author });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAuthorById(req, res) {
  const id = req.params.id;
  try {
    const author = await AuthorsModel.findById(id);
    res.json({ author });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getAuthorByName, getAuthorById };
