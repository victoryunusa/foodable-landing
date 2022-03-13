import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };
  return (
    <header className="relative pt-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
        <div className="w-14">
          <Link to="/" className="text-2xl font-rubik tracking-wide font-bold">
            foodabl<span className="text-green-500">e</span>
          </Link>
        </div>
        <div onClick={onClick} className="md:hidden cursor-pointer">
          Menu
        </div>
        <nav
          className={`
      ${!active && "hidden"}
       absolute flex flex-col top-full w-full left-0 z-20
       md:static md:w-auto md:flex-row md:flex md:space-x-5
      `}
        >
          <ul className="md:flex-row md:flex items-center md:space-x-8">
            <li className="link-none">
              <Link
                to="/"
                className="flex w-full px-2.5 text-base font-normal hover:text-green-500"
              >
                Home
              </Link>
            </li>
            <li className="link-none">
              <Link
                to="/"
                className="flex w-full px-2.5 text-base font-normal hover:text-green-500"
              >
                Business
              </Link>
            </li>
            <li className="link-none ml-0">
              <Link
                to="/"
                className="flex w-full px-2.5 text-base font-normal hover:text-green-500"
              >
                Suppliers
              </Link>
            </li>
            <li className="link-none">
              <Link
                to="/"
                className="flex w-full px-2.5 text-base font-normal hover:text-green-500"
              >
                Contact
              </Link>
            </li>
          </ul>

          <button className="flex justify-center items-center bg-green-500 hover:bg-teal-700 hover:shadow-lg text-white pt-2.5 py-3 px-3 w-32 rounded-md">
            Order now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
