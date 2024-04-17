const { BooksModel } = require("../models/books")

async function getAllBooks(req, res) {
    try {
        const books = await BooksModel.find({});
        res.json({books});        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function getBookWithId(req, res) {
    const bookId = req.params.bookId;
    try {
        const books = await BooksModel.findOne({bookId})
        res.json({books});        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllBooks,
    getBookWithId,
}