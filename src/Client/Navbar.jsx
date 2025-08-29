import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 ">
            <div className="text-2xl font-bold text-blue-500">
                RESTRO
            </div>
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6">
                    <Link to="/" className="px-4 py-2 text-xl text-blue-500 hover:text-blue-700">Home</Link>
                    <Link to="/items" className="px-4 py-2 text-xl text-blue-500 hover:text-blue-700">Items</Link>
                    <Link to="/contact" className="px-4 py-2 text-xl text-blue-500 hover:text-blue-700">Contact</Link>
                    <Link to="/ourteam" className="px-4 py-2 text-xl text-blue-500 hover:text-blue-700">Team</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar