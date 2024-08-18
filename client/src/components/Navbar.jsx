import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { currentUser } = useSelector((state) => state.user);
  
  return (
    <div className="relative bg-gradient-to-r from-blue-200 to-purple-200 shadow-lg rounded-b-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Auth App
          </h1>
        </Link>
        <ul className="flex gap-6 text-lg md:text-xl lg:text-2xl">
          <Link to={"/"}>
            <li className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="text-gray-700 hover:text-blue-600 transition-colors duration-300">About</li>
          </Link>
          <Link to={"/profile"} className="flex items-center">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-8 w-8 rounded-full object-cover border-2 border-gray-300 shadow-sm transition-transform duration-300 transform hover:scale-105"
              />
            ) : (
              <li className="text-gray-700 hover:text-blue-600 transition-colors duration-300">Sign-in</li>
            )}
          </Link>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
