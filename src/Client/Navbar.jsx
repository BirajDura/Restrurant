import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className=" absolute flex items-center justify-between px-6 py-4 bg-transparent  w-full z-10">
            <div className="text-2xl font-bold text-white">
                RESTRO
            </div>
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6">
                    <Link to="/" className="px-4 py-2 text-xl text-white hover:text-blue-700">Home</Link>
                    <Link to="/items" className="px-4 py-2 text-xl text-white hover:text-blue-700">Items</Link>
                    <Link to="/contact" className="px-4 py-2 text-xl text-white hover:text-blue-700">Contact</Link>
                    <Link to="/ourteam" className="px-4 py-2 text-xl text-white hover:text-blue-700">Team</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar