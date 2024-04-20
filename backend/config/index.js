const mongoose = require("mongoose");
const { seedBooks } = require("../seeders/books-seeder");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL || `mongodb+srv://vigmurug:H8HhtCvAdWXo2t0u@cluster0.evpvr6s.mongodb.net/books-review`);
        console.log("Connected to DB");
        await seedBooks();
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectDB}