import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/foodable-logo.png";

const Header = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    window.open("https://foodable.ng");
  };
  const onClose = () => {
    setActive(!active);
  };

  return (
    <header className="relative pt-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-black">
        <div className="">
          <Link to="/" className="text-3xl font-alata tracking-wide font-bold">
            <img className="w-32" src={logo} alt="logo" />
          </Link>
        </div>
        <div onClick={onClose} className="md:hidden cursor-pointer">
          <svg
            className="w-8 h-8"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z"
              fill="currentColor"
            />
            <path
              d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z"
              fill="currentColor"
            />
            <path
              d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <nav
          className={`
      ${!active && "hidden"}
       absolute flex flex-col top-full w-full left-0 z-20
       md:static md:w-auto md:flex-row md:flex md:space-x-5
      `}
        >
          <ul className="md:flex-row md:flex items-center md:space-x-2">
            <li className="link-none">
              <Link
                to="/"
                className="flex w-full px-2.5 text-md  font-semibold hover:text-zinc-700"
              >
                Become a supplier
              </Link>
            </li>
            <li className="link-none">
              <Link
                to="/restaurants"
                className="flex w-full px-2.5 text-md font-semibold hover:text-zinc-700"
              >
                Restaurants
              </Link>
            </li>
            <li className="link-none ml-0">
              <Link
                to="/riders"
                className="flex w-full px-2.5 text-md font-semibold hover:text-zinc-700"
              >
                Riders
              </Link>
            </li>
            <li className="link-none">
              <Link
                to="/"
                className="flex w-full px-2.5 text-md font-semibold hover:text-zinc-700"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button
            onClick={onClick}
            className="flex justify-center items-center text-sm font-semibold  bg-black hover:bg-zinc-700 text-white p-3 w-32 rounded-xl"
          >
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
