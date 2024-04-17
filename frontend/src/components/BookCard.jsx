import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton'


const BookCard = ({book, key}) => {
  return (
    <div key={key} className='border rounded-md p-2'>
      <img src={book?.image || <Skeleton />} alt={book?.title} />
      <h3>{book?.title || <Skeleton />}</h3>
      <p>{book?.author || <Skeleton />}</p>
      <p>{book?.genre || <Skeleton />}</p>
      <p>{book?.description || <Skeleton />}</p>
    </div>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  description: PropTypes.string,
  }),
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BookCard