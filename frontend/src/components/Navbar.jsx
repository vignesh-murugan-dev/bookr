import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b shadow-sm space-y-2 mb-4">
        <Link to={'/'}><span>Book</span><span>Genie</span></Link>
        <div>
            <Link to={'/about'}>About Us</Link>
        </div>
    </div>
  )
}

export default Navbar