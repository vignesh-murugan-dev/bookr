import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b shadow-sm space-y-2 mb-4">
        <Link to={'/'} className="text-2xl font-mono font-medium">Bookd</Link>
        <div>
          <Link to={'/'}>About Us</Link>
        </div>
    </div>
  )
}

export default Navbar