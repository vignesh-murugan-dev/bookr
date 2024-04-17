const { BooksModel } = require("../models/books")

async function getAllBooks(req, res) {
    try {
        const books = await BooksModel.find({});
        res.json({books});        
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = {
    getAllBooks,
}