const mongoose = require("mongoose");
const { BooksModel } = require("../models/books");
const { AuthorsModel } = require("../models/authors");

async function seedBooks() {
    // await mongoose.connect(process.env.MONGO_URL)
    
    const existingBooks = await BooksModel.find({});
    const existingAuthors = await BooksModel.find({});

    // await BooksModel.deleteMany({});
    // await AuthorsModel.deleteMany({});

    if (existingBooks.length == 0 && existingAuthors.length == 0) {
        await BooksModel.insertMany(bookItems);
        await AuthorsModel.insertMany(authorItems);
    }
}

const bookItems = [
    {   
        bookId: 1,
        title: "Dune",
        author: "Frank Herbert",
        year: 1965,
        genre: ["fiction"],
        rating: 3.9,
        bookImgUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPKlQbYym2c7Ja59ztwDCkV7wGBOeNi-71zGf-IK-4lWv205wB",
        description: "Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. It tied with Roger Zelazny's This Immortal for the Hugo Award for Best Novel and won the inaugural Nebula Award for Best Novel in 1966.",
    },
    {
        bookId: 2,
        title: "Atomic Habits",
        author: "James Clear",
        year: 2018,
        genre: ["non-fiction", "self-help"],
        rating: 4.2,
        bookImgUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkOF8cQi0-riI-TgL2MlwSaPDNGKlOu6hvK3ub-XfMNEc1I2gX",
        description: "A supremely practical and useful book. James Clear distils the most fundamental information about habit formation, so you can accomplish more by focusing on less.",
    },
    {   
        bookId: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813,
        genre: ["fiction", "romance"],
        rating: 4.3,
        bookImgUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKPneOFTvRKKmb4Qzd6_gF1bCqKB_RhJ3HlfZysW7h3CYfnoXf",
        description: "Pride and Prejudice is the second novel by English author Jane Austen, published in 1813. A novel of manners, it follows the character development of Elizabeth Bennet, the protagonist of the book, who ...",
    },
    {
        bookId: 4,
        title: "Bride",
        author: "Ali Hazelwood",
        year: 2024,
        bookImgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyWFIBdp5D7NLcQxnmLH8j0XRyzMSaOb9FckBMqJndRcZbSN8",
        description: "#1 Indie Next Pick!A Hall of Fame LibraryReads pick!One of People’s Best Books to Read in FebruaryA dangerous alliance between a Vampyre bride and an Alpha Werewolf becomes a love deep enough to sink ...",
        genre: ["fiction", "romance", "fantasy"],
        rating: 4.7
    },
    {
        bookId: 5,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        year: 1943,
        genre: ["fiction","children"],
        rating: 4.3,
        bookImgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXrvaG6ok_VtuJr6iQNCMNrio5EkHOXy7SbdJsmMzBDhgALNfn",
        description: "The Little Prince is a novella written and illustrated by French writer, and military pilot, Antoine de Saint-Exupéry.",
    },
    {
        bookId: 6,
        title: "The Book Thief",
        author: "Markus Zusak",
        year: 2005,
        bookImgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-W_4DKzfvPOVZPfwHRn4OVbWYkTZRRT_F7QmPo8894_0QSzMG",
        description: "The Book Thief is a historical fiction novel by the Australian author Markus Zusak, set in Nazi Germany during World War II. Published in 2006, The Book Thief became an international bestseller and was translated into 63 languages and sold 17 million copies.",
        genre: ["fiction", "history"],
        rating: 3.8
    },
    {
        bookId: 7,
        title: "1984",
        author: "George Orwell",
        year: 1949,
        bookImgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeglXlBmm240qQ70HEi6CpdgjyevAGT78Vo8iOVtsLnkiDw5pb",
        description: "Nineteen Eighty-Four is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwell's ninth and final book completed in his lifetime.",
        genre: ["fiction"],
        rating: 4.6
    },
    {
        bookId: 8,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        year: 2016,
        bookImgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5-pYy0uOYZspWiQEyp_GsEhhCjQ18okOezBC48xvcoWucnmtJ",
        description: "It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016. Based on the relationship between her mother and father, Hoover described it as the hardest book I've ever written.",
        genre: ["fiction", "romance"],
        rating: 4.2
    },
    {   
        bookId: 9,
        title: "Happy Place",
        author: "Emily Henry",
        year: 2023,
        bookImgUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTMtIHKz6P5NlEdwV3Mt1lL_fkoqXTj57c8hf-xXO06O6fIE3Gr",
        description: "Happy Place is a 2023 novel written by American author Emily Henry published on the 25th of April. Praised by many, this standalone novel follows a couple as they work through the complexities of a relationship and breakup, discovering along the way what finding your “happy place” really means.",
        genre: ["fiction", "romance"],
        rating: 3.2
    },
    {   
        bookId: 10,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        bookImgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR819TtvIV0JJ5_Wzzfcnk3y2eXfPpamZmdbrg5ofv0Ydafpw_f",
        description: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in June 1960 and became instantly successful. In the United States, it is widely read in high schools and middle schools.",
        genre: ["fiction", "self-help"],
        rating: 4.5
    },
]

const authorItems = [
    {   
        name: "Frank Herbert",
        about: "Franklin Patrick Herbert Jr. was an American science-fiction author, best known for his 1965 novel Dune and its five sequels. He also wrote short stories and worked as a newspaper journalist, photographer, book reviewer, ecological consultant, and lecturer. ",
        imgUrl: "https://dunenovels.com/wp-content/uploads/2020/11/frank-herbert-color-2.jpg",
    },
    {
        name: "James Clear",
        about: "James Clear is an expert on habits and decision making. He made his name as the author of one of the fastest-growing email newsletters in history, which grew from zero to 100,000 subscribers in under two years.",
        imgUrl: "https://leaders.com/wp-content/uploads/2023/02/Database-bio-profile-pic-28.png?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2",
        
    },
    {   
        name: "Jane Austen",
        about: "Jane Austen was an English novelist known primarily for her six novels, which implicitly interpret, critique, and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage for the pursuit of favourable social standing and economic security.",
        imgUrl: "https://cdn.britannica.com/12/172012-050-DAA7CE6B/Jane-Austen-Cassandra-engraving-portrait-1810.jpg",
    },
    {
        name: "Ali Hazelwood",
        about: "Ali Hazelwood is the pen name of an Italian romance novelist and neuroscience professor. Many of her works center on women in STEM fields and academia. Her debut novel, The Love Hypothesis, was a New York Times best seller.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_dZkz-284TIdQzvX2o0h55hA36kIUXTzOnIk8NFvxA&s",
    },
    {
        name: "Antoine de Saint-Exupéry",
        about: "Antoine Marie Jean-Baptiste Roger, comte de Saint-Exupéry, known simply as Antoine de Saint-Exupéry, was a French writer, poet, journalist and aviator.",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BYWU4ZTQ1ZTktZTc3Mi00MzllLThiN2QtNjc1ZjY5ZGQxNDdjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTc4MzI2NQ@@._V1_.jpg",
    },
    {
        name: "Markus Zusak",
        about: "Markus Zusak is an Australian writer. He is best known for The Book Thief and The Messenger, two novels that became international bestsellers. He won the Margaret A. Edwards Award in 2014.",
        imgUrl: "https://images3.penguinrandomhouse.com/author/59222",
    },
    {
        name: "George Orwell",
        about: "Eric Arthur Blair was an English novelist, poet, essayist, journalist, and critic who wrote under the pen name of George Orwell. His work is characterised by lucid prose, social criticism, opposition to totalitarianism, and support of democratic socialism.",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/800px-George_Orwell_press_photo.jpg",
    },
    {
        name: "Colleen Hoover",
        about: "Colleen Hoover is an American author who primarily writes novels in the romance and young adult fiction genres. She is best known for her 2016 romance novel It Ends with Us. Many of her works were self-published before being picked up by a publishing house.",
        imgUrl: "https://cdn.britannica.com/25/237325-050-398F2A47/Author-Colleen-Hoover-2016.jpg",
    },
    {   
        name: "Emily Henry",
        about: "Emily Henry is an American author who is best known for her New York Times bestselling romance novels Beach Read, People We Meet on Vacation, Book Lovers, and Happy Place.",
        imgUrl: "https://images4.penguinrandomhouse.com/author/306512",
    },
    {   
        name: "Harper Lee",
        about: "Nelle Harper Lee was an American novelist whose 1960 novel To Kill a Mockingbird won the 1961 Pulitzer Prize and became a classic of modern American literature. She assisted her close friend Truman Capote in his research for the book In Cold Blood.",
        imgUrl: "https://cdn.britannica.com/04/193204-050-4B1C2FE7/Harper-Lee-American.jpg",
    },
]

module.exports = {seedBooks}