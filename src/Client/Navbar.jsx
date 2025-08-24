import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/" className="px-4 py-2 text-blue-500">Home</Link>
            <Link to="/items" className="px-4 py-2 text-blue-500">Items</Link>
            <Link to="/contact" className="px-4 py-2 text-blue-500">contact</Link>
            <Link to="/ourteam" className="px-4 py-2 text-blue-500">Team</Link>

        </div>
    )
}

export default Navbar
