import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="bg-slate-400 ">
      <div className="flex justify-between max-w-7xl items-center mx-auto p-4 ">
        <Link to={"/"}>
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-5">
          <Link to={"/home"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>
          <Link to={"/sign-in"}>
            <li>Sign-in</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
