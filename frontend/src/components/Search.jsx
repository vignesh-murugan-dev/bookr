import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setFoundBooks } from "../store/booksSlice";
import { Link } from "react-router-dom";

const Search = () => {
  const foundBooks = useSelector((state) => state.books.foundBooks);
  const dispatch = useDispatch();

  const fetchResults = async (e) => {
    const searchInput = e?.target?.value;
    const response = await axios.get(`http://localhost:3001/api/books/find/${searchInput}`);
    const data = response?.data?.books;
    dispatch(setFoundBooks(data));
  }

  const handleItemClick = () => {
    dispatch(setFoundBooks([]));
  }

  return (
    <div className="flex flex-col items-end mb-4">
      <input 
        onChange={fetchResults}
        type="text"
        placeholder="Search your favourite books.." 
        className="w-72 relative p-2 border rounded-md focus:outline-none text-black" 
      />
      { 
        foundBooks.length > 0 
        ?
          <ul className="w-72 absolute top-28 z-10 p-2 bg-gray-500 rounded-md mt-1">
            {foundBooks?.map((book, index) => (
              <li key={index} onClick={handleItemClick} className="border-b last:border-none">
                <Link to={`books/${book.bookId}`} className="block">{book?.title}</Link>
              </li>
            ))}
          </ul> 
        : <></> 
      }
    </div>
  )
}

export default Search;
