import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton'

const BookCard = ({book, key, author}) => {
  
  return (
    <div className='border-none rounded-md shadow-lg p-2 w-60 h-[100%] hover:cursor-pointer bg-blueGray-100' key={key}>
      <img src={book?.bookImgUrl} alt={book?.title} className='w-full h-56 rounded-md shadow-md' />
      <div className='space-y-2 mt-4'>
        <p className='font-bold text-lg'>{book?.title || <Skeleton />}</p>
        <p className='font-semibold text-sm '>by {author || <Skeleton />}</p>
      </div>
      {/* <p>{book?.genre || <Skeleton />}</p> */}
      {/* <p className='text-sm break-words'>{book?.description.slice(0,150) + "..." || <Skeleton />}</p> */}
    </div>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    bookImgUrl: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    genre: PropTypes.array,
    description: PropTypes.string,
  }),
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  author: PropTypes.string,
};

export default BookCard