import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import { setBookData, setIsLoading } from "../store/booksSlice";
import AuthorCard from "../components/AuthorCard";
import BookDataCard from "../components/BookDataCard";
import ReaderReviews from "../components/ReaderReviews";
import { setAuthorData } from "../store/authorSlice";

const Book = () => {
  const {bookId} = useParams();

  const bookData = useSelector((state) => state.books.bookData);
  const dispatch = useDispatch();
 
  const fetchBookData = async () => {
    const response = await axios.get(`http://localhost:3001/api/books/${bookId}`);
    const data = await response?.data?.books;
    dispatch(setBookData(data));
    
    const author = data?.author[0];
    const authorResponse = await axios.get(`http://localhost:3001/api/authors/id/${author}`);
    const authorData = await authorResponse?.data?.author;
    dispatch(setAuthorData(authorData));
  }
  
  useEffect(() => {
    dispatch(setIsLoading(true));
    fetchBookData();
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 3000)
  }, [])


  return (
    <div className="space-y-10">
      <Link to={"/"}><span className="text-xl">{"< "}</span>Back</Link>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-center">
        <div className="w-1/3 flex justify-center transform transition-transform hover:scale-105 duration-300 hover:cursor-pointer">
          <img src={bookData?.bookImgUrl} alt={bookData?.title} className="w-full md:w-56" />
        </div>
        <div className="md:w-1/2 p-2 space-y-4 rounded-md bg-blueGray-100">
          <BookDataCard />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around md:space-y-4">
        <div className="flex flex-col md:w-1/3 h-1/2 bg-blueGray-100 p-2 rounded-md space-y-4">
          <AuthorCard />
        </div>
        <div className="md:w-1/3 space-y-4 mt-4 md:mt-0">
          <ReaderReviews />
        </div>
      </div>
    </div>
  )
}

export default Book