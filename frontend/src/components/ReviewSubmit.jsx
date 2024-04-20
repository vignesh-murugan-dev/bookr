import {useDispatch, useSelector} from "react-redux";
import { setReload, setUserName, setUserRating, setUserReview } from "../store/reviewsSlice";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReviewSubmit = () => {

  const {bookId} = useParams();

  const userReview = useSelector((state) => state.reviews.userReview);
  const userRating = useSelector((state) => state.reviews.userRating);
  const userName = useSelector((state) => state.reviews.userName);
  const reload = useSelector((state) => state.reviews.reload);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:3001/api/reviews/submit/${bookId}`, {userReview, userRating, userName});
    dispatch(setUserReview(""));
    dispatch(setUserRating(""));
    dispatch(setUserName(""));
    dispatch(setReload(!reload));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <p>Submit your review:</p>
      <textarea required value={userReview} onChange={(e) => dispatch(setUserReview(e?.target?.value))} className="w-full rounded-md h-20 focus:outline-none p-1 text-black" placeholder="Your review here..." type="text" />
      <input required value={userRating} onChange={(e) => dispatch(setUserRating(e?.target?.value))} className="w-full rounded-md focus:outline-none p-1 text-black" placeholder="Rating (0-5)" type="number" step={"any"} min={1} max={5} />
      <input required value={userName} onChange={(e) => dispatch(setUserName(e?.target?.value))} className="w-full rounded-md focus:outline-none p-1 text-black" placeholder="Your name..." type="text" />
      <button className="border p-2 rounded-md w-20" type="submit">Post</button>
    </form>
  )
}

export default ReviewSubmit