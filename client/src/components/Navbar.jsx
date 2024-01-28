import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="flex justify-between max-w-7xl items-center mx-auto p-4">
        <Link to={"/"}>
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800">Auth App</h1>
        </Link>
        <ul className="flex gap-5 text-lg md:text-xl lg:text-2xl">
          <Link to={"/home"}>
            <li className="text-gray-700 hover:text-blue-500">Home</li>
          </Link>
          <Link to={"/about"}>
            <li className="text-gray-700 hover:text-blue-500">About</li>
          </Link>
          <Link to={"/sign-in"}>
            <li className="text-gray-700 hover:text-blue-500">Sign-in</li>
          </Link>
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
