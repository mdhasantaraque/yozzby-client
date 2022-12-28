import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const allMenu = (
    <>
      <li>
        <Link to="/media">Media</Link>
      </li>
      <li>
        <Link to="/message">Message</Link>
      </li>

      {user?.uid ? (
        <li>
          <button onClick={handleLogOut}>Sign out</button>
        </li>
      ) : (
        <>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-blue-400 justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-blue-400 rounded-box w-52"
          >
            {allMenu}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-white text-xl">
          YozzBY
        </Link>
      </div>
      <div className="navbar-center text-white hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{allMenu}</ul>
      </div>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
    </div>
  );
};

export default Header;
