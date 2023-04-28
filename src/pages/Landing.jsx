import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Animated } from "react-animated-css";
import fresh from "../assets/images/organic.png";
import safe from "../assets/images/food-safety.png";
import farmer from "../assets/images/farmer.png";
import qrcode from "../assets/images/qr-code.png";
import android from "../assets/images/playstore.svg";
import apple from "../assets/images/icons8-apple-logo.svg";
import portrait from "../assets/images/app.png";
import iphone from "../assets/images/iphone-1.png";
import chef from "../assets/images/black-chef.jpg";
import white_chef from "../assets/images/white-chef.jpg";
import sustainable from "../assets/images/sustain.jpg";

function Landing() {
  return (
    <div className={`bg-white max-w-7xl mx-auto`}>
      <div className="flex flex-col-reverse md:flex md:flex-row justify-between items-center py-20 my-28 max-w-screen-xl gap-10 mx-auto pt-5 md:pt-10 ">
        <div className="md:w-1/2 mb-2">
          <span>
            <span className="text-6xl font-jakarta font-extrabold flex flex-col ">
              The operating system for savvy
              <span className="text-nelsa_blue mt-2 ">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "restaurants.",
                    "bars.",
                    "eatries.",
                    "cafes.",
                    "canteens.",
                    "food trucks.",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={90}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </span>

          <p className="leading-relaxed mt-5 text-zinc-700 text-lg">
            Nelsa is a comprehensive restaurant management platform that
            combines all the tools you need to run your restaurant in one place.
            Our software offers an intuitive and easy-to-use point of sale
            system, robust HR and payroll management features, seamless payment
            processing, and a suite of third-party integrations to help you
            optimize your operations, grow your revenue, and deliver an
            exceptional guest experience.
          </p>
          <div className="flex flex-row gap-2 md:gap-7 justify-start mt-16">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc58Pqkm-ge6rDiViD1fSJ4Z8Yo2AaHzvwnejXEQzI9GKkGaw/viewform?usp=sf_link"
              target="_blank"
              class="bg-black text-white font-bold p-3 rounded-lg inline-flex items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className=" ml-2 text-lg tracking-wide flex flex-row">
                Join waitlist
                <svg
                  className="w-4 ml-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4297 5.93018L20.4997 12.0002L14.4297 18.0702"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 12H20.33"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </motion.a>
          </div>
        </div>

        <motion.div
          className="md:w-1/2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img className="rounded-lg cover" src={portrait} alt="landing.png" />
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
