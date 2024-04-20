import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setReadersReviews } from '../store/reviewsSlice';
import { useEffect } from 'react';
import Star from './Star';

const Reviews = () => {

    const {bookId} = useParams();

    const readersReviews = useSelector((state) => state.reviews.readersReviews);
    const reload = useSelector((state) => state.reviews.reload);
  
    const dispatch = useDispatch();
  
    const fetchReviews = async () => {
      const response = await axios.get(`http://localhost:3001/api/reviews/books/${bookId}`);
      const data = await response?.data?.reviews;
      dispatch(setReadersReviews(data));
    }
    
    useEffect(() => {
      fetchReviews();
    }, [reload])

  return (
    <div className="border w-full mt-4 rounded-md h-56 overflow-y-scroll p-2">
        {readersReviews?.map((review, index) => {
              return (
                <div key={index} className="">
                    <div className='flex gap-4 items-center'>
                        <img src={review?.userImg} className='rounded-full w-8 h-8' />
                        <p>{review?.userName}</p>
                        <Star data={review} />
                    </div>
                    <p className='p-1 mb-2'>{review?.review}</p>
                </div>
              )
            })
        }
    </div>
  )
}

export default Reviews