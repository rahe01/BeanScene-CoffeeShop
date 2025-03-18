import React from "react";
import { Link } from "react-router"; // Ensure correct import

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-transparent backdrop-blur-sm text-white">
      <div className="navbar container mx-auto py-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/submenu1">Submenu 1</Link>
                  </li>
                  <li>
                    <Link to="/submenu2">Submenu 2</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className=" font-semibold ben-font text-3xl">
            Bean Scene
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2">
          <Link to="/signin" className="btn bg-[#F9C06A] rounded-3xl text-black hover:bg-transparent hover:text-white">
            Sign In
          </Link>
          <Link to="/signup" className="btn bg-[#F9C06A] rounded-3xl text-black hover:bg-transparent hover:text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
