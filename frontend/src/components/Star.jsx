import { useSelector } from "react-redux";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

const Star = () => {

    const bookData = useSelector((state) => state.books.bookData);
    const stars = bookData?.avgRating?.$numberDecimal;

    const starRating = Array.from({length: 5}, (ele, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 ? (
                        <FaStar className="text-yellow-500" />
                    ) : stars >= number ? (
                        <FaStarHalfAlt className="text-yellow-500" />
                    ) : (
                        <AiOutlineStar className="text-yellow-500" />
                    )
                }
            </span>
        )
    })
  return (
    <div className="flex">
        {starRating}
    </div>
  )
}

export default Star