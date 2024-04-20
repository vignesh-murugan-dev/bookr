import { useSelector } from "react-redux";
import Star from "./Star";

const BookDataCard = () => {

    const bookData = useSelector((state) => state.books.bookData);

  return (
    <>
      <p className="text-3xl font-bold">{bookData?.title}</p>
      <Star data={bookData} />
      <p className="text-gray-200">by <span className="font-semibold">{bookData?.author}</span> | {bookData?.year}</p>
      {/* <p className="text-gray-200">⭐ {bookData?.avgRating?.$numberDecimal}</p> */}
      <p>{bookData?.description}</p>
    </>
  )
}

export default BookDataCard