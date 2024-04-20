import { useSelector } from "react-redux";

const AuthorCard = () => {

  const authorData = useSelector((state) => state.author.authorData);

  return (
    <>
      <p className="text-xl font-semibold">About the Author</p>
      <div className="flex items-center gap-4">
        <img alt="" src={authorData?.imgUrl} className="rounded-full w-10 h-10" />
        <p className="font-semibold text-lg">{authorData?.name}</p>
      </div>
      <p>{authorData?.about}</p>
    </>
  )
}

export default AuthorCard