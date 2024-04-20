import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Search from "../components/Search";
import { setBooks } from "../store/booksSlice";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const [authors, setAuthors] = useState({});

  const getAllBooks = async () => {
    const response = await axios.get("http://localhost:3001/api/books");
    const data = response.data.books;
    dispatch(setBooks(data));
  };

  const findAuthor = async (authorId) => {
    const response = await axios.get(`http://localhost:3001/api/authors/id/${authorId}`);
    const data = response.data;
    return data?.author?.name;
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  useEffect(() => {
    // Fetch author names for all books
    const fetchAuthors = async () => {
      const authorPromises = books.map((book) => findAuthor(book.author));
      const authorNames = await Promise.all(authorPromises);
      const authorMap = {};
      books.forEach((book, index) => {
        authorMap[book._id] = authorNames[index];
      });
      setAuthors(authorMap);
    };

    fetchAuthors();
  }, [books]);

  return (
    <div className="flex flex-col">
      <div className="">
        <Search />
      </div>
      <div className="flex flex-col mt-4">
        <p className="font-bold text-2xl">Our Collection:</p>
        <div className="flex justify-center flex-wrap gap-4 mt-4">
          {books.map((book) => (
            <Link to={`/books/${book.bookId}`} key={book._id} className="transition-transform duration-300 transform hover:scale-105">
              <BookCard book={book} author={authors[book._id]} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
