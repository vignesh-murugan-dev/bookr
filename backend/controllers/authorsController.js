const { AuthorsModel } = require("../models/authors");

async function getAuthorDetails(req, res) {
    const name = req.params.name;
    try {
        const author = await AuthorsModel.find({name});
        res.json({author});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = { getAuthorDetails }