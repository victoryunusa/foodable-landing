import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/nelsa-logo-white.svg";

const LandingFooter = () => {
  const prod_year = new Date();
  return (
    <footer className="relative text-white p-4">
      <div className="px-15 py-10 max-w-screen-xl mx-auto">
        <div className="flex flex-col  md:flex md:flex-row w-full mb-10">
          <div className="flex-col w-1/3">
            <div className="">
              <Link to="/" className="text-3xl tracking-wide font-bold">
                <img className="w-20" src={logo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-2/3">
            <div className="flex flex-col md:flex md:flex-row w-full">
              <div className="flex flex-col w-full mb-5 mt-5 md:mt-0  md:w-1/3">
                <h3 className="font-bold pb-2.5 text-xl font-jakarta">
                  General
                </h3>
                <ul className="flex flex-col gap-y-2">
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Our Impact</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Suppliers</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">FAQ</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Product updates</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col w-full mb-5 mt-5 md:mt-0  md:w-1/3">
                <h3 className="font-bold pb-2.5 text-xl font-jakarta">
                  Work with us
                </h3>
                <ul className="flex flex-col gap-y-2">
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">About</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Careers</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Contact us</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Investor Relations</Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col w-full mb-5 mt-5 md:mt-0 md:w-1/3 ">
                <h3 className="font-bold pb-2.5 text-xl font-jakarta">
                  Follow our stories
                </h3>
                <ul className="flex flex-col gap-y-2">
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Restaurant management</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Producer guide</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <Link to="#">Life at Nelsa</Link>
                  </li>
                  <li className="hover:underline hover:underline-offset-2">
                    <a href="https://nelsa.bloggi.co/" target="_blank">
                      Nelsa Chef Lab
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-4">
          <div>
            <p className="text-md">© Nelsa, Inc. {prod_year.getFullYear()}</p>
          </div>
          <div>
            <p className="text-md">
              Terms and conditions · Privacy policy · Cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
