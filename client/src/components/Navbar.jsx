import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 fixed top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30 bg-white">
      {/* logo and site name */}
      <div className="flex justify-between items-center">
        <img src="photoforge_logo1.png" alt="logo" className="h-20 w-30"/>
      </div>

      {/* list of other tabs */}

      <ul className="flex gap-5 text-xl font-semibold text-gray-400">
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">Home</Link>
        <Link to="/" className="hover:text-black cursor-pointer sm:p-2">About</Link>
        <Link to="/login" className="hover:text-black cursor-pointer sm:p-2">Log In</Link>
        <Link to="/signup" className="hover:text-black cursor-pointer sm:p-2">Sign Up</Link>
      </ul>
    </nav>
  );
};

export default Navbar;