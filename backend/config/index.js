const mongoose = require("mongoose");
const { seedBooks } = require("../seeders/books-seeder");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB");
        await seedBooks();
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDB}