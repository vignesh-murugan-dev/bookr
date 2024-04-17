const mongoose = require("mongoose");
const { BooksModel } = require("../models/books");

async function seedBooks() {
    // await mongoose.connect(process.env.MONGO_URL)
    
    const existingData = await BooksModel.find({});

    if (existingData.length == 0) {
        await BooksModel.insertMany(seedItems);
    }
    // await BooksModel.deleteMany({});
}

const seedItems = [
    {   
        bookId: 1,
        title: "Dune",
        author: "Frank Herbert",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPKlQbYym2c7Ja59ztwDCkV7wGBOeNi-71zGf-IK-4lWv205wB",
        description: "Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelazny's This Immortal for the Hugo Award for Best Novel and won the inaugural Nebula Award for Best Novel in 1966.",
        genre: ["fiction"],
        avgRating: 3.9
    },
    {
        bookId: 2,
        title: "Atomic Habits",
        author: "James Clear",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkOF8cQi0-riI-TgL2MlwSaPDNGKlOu6hvK3ub-XfMNEc1I2gX",
        description: "A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.",
        genre: ["non-fiction", "self-help"],
        avgRating: 4.2
    },
    {   
        bookId: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKPneOFTvRKKmb4Qzd6_gF1bCqKB_RhJ3HlfZysW7h3CYfnoXf",
        description: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who ...",
        genre: ["fiction", "love"],
        avgRating: 4.0
    },
    {
        bookId: 4,
        title: "Bride",
        author: "Ali Hazelwood",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyWFIBdp5D7NLcQxnmLH8j0XRyzMSaOb9FckBMqJndRcZbSN8",
        description: "#1 Indie Next Pick!A Hall of Fame LibraryReads pick!One of People’s Best Books to Read in FebruaryA dangerous alliance between a Vampyre bride and an Alpha Werewolf becomes a love deep enough to sink ...",
        genre: ["fiction", "love"],
        avgRating: 4.7
    },
    {
        bookId: 5,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXrvaG6ok_VtuJr6iQNCMNrio5EkHOXy7SbdJsmMzBDhgALNfn",
        description: "The Little Prince is a novella written and illustrated by French writer, and military pilot, Antoine de Saint-Exupéry.",
        genre: ["children"],
        avgRating: 4.1
    },
    {
        bookId: 6,
        title: "The Book Thief",
        author: "Markus Zusak",
        imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-W_4DKzfvPOVZPfwHRn4OVbWYkTZRRT_F7QmPo8894_0QSzMG",
        description: "The Book Thief is a historical fiction novel by the Australian author Markus Zusak, set in Nazi Germany during World War II. Published in 2006, The Book Thief became an international bestseller and was translated into 63 languages and sold 17 million copies.",
        genre: ["fiction", "history"],
        avgRating: 3.8
    },
    {
        bookId: 7,
        title: "1984",
        author: "George Orwell",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeglXlBmm240qQ70HEi6CpdgjyevAGT78Vo8iOVtsLnkiDw5pb",
        description: "Nineteen Eighty-Four is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
        genre: ["fiction"],
        avgRating: 4.6
    },
    {
        bookId: 8,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5-pYy0uOYZspWiQEyp_GsEhhCjQ18okOezBC48xvcoWucnmtJ",
        description: "It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016. Based on the relationship between her mother and father, Hoover described it as the hardest book I've ever written.",
        genre: ["fiction", "love"],
        avgRating: 4.5
    },
    {   
        bookId: 9,
        title: "Happy Place",
        author: "Emily Henry",
        imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMtIHKz6P5NlEdwV3Mt1lL_fkoqXTj57c8hf-xXO06O6fIE3Gr",
        description: "Happy Place is a 2023 novel written by American author Emily Henry published on the 25th of April. Praised by many, this standalone novel follows a couple as they work through the complexities of a relationship and breakup, discovering along the way what finding your “happy place” really means.",
        genre: ["fiction", "love"],
        avgRating: 3.2
    },
    {   
        bookId: 10,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR819TtvIV0JJ5_Wzzfcnk3y2eXfPpamZmdbrg5ofv0Ydafpw_f",
        description: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in June 1960 and became instantly successful. In the United States, it is widely read in high schools and middle schools.",
        genre: ["fiction", "self-help"],
        avgRating: 4.5
    },
]

module.exports = {seedBooks}