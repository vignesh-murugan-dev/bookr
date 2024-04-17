import { useSelector, useDispatch } from "react-redux"
import Search from "../components/Search"
import { setBooks } from "../store/booksSlice";
import { useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const Home = () => {

  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const getAllBooks = async() => {
    const response = await axios.get("");
    console.log(response);
    // dispatch(setBooks(response?.books))
  }

  useEffect(() => {
    getAllBooks();    
  }, [])
  

  return (
    <div className="flex flex-col">
      <div className="flex justify-end">
        <Search />
      </div>
      <div>
        {
          books?.map((book) => {
            <BookCard book={book} key={book?.id} />
          })
        }
      </div>
    </div>
  )
}

export default Home