import { useSelector } from "react-redux";

const AuthorCard = () => {

  const bookData = useSelector((state) => state.books.bookData);

  return (
    <>
          <p className="text-xl font-semibold">About the Author</p>
          <div className="flex items-center gap-4">
            <img alt="" src={bookData?.authorImgUrl} className="rounded-full w-10 h-10" />
            <p className="font-semibold text-lg">{bookData?.author}</p>
          </div>
          <p>{bookData?.aboutAuthor}</p>
    </>
  )
}

export default AuthorCard