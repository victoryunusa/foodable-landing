import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Animated } from "react-animated-css";
import worldwide from "../assets/images/worldwide.png";
import card from "../assets/images/card.png";
import hr from "../assets/images/hr.png";
import pos from "../assets/images/point-of-sale.png";
import email from "../assets/images/email-marketing.png";
import portrait from "../assets/images/app.png";
import inventory from "../assets/images/inventory.png";
import chef from "../assets/images/black-chef.jpg";
import online from "../assets/images/online-order.png";
import analytics from "../assets/images/analytics.png";

function Landing() {
  return (
    <div className={` max-w-7xl mx-auto`}>
      <div className="p-5">
        <div className="flex flex-col justify-between items-center mt-5 md:mt-20 gap-10 ">
          <div className="mx-28 w-2/3 flex flex-col gap-10 items-center justify-center">
            <h1 className="text-4xl text-center md:text-7xl font-clash font-semibold">
              The secret ingredient to your <br />
              <span className="text-nelsa_blue">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "restaurant's",
                    "bar's",
                    "eatries'",
                    "cafe's",
                    "canteen's",
                    "food trucks'",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={90}
                  delaySpeed={1000}
                />
              </span>
              <br />
              success.
            </h1>

            <p className=" text-zinc-200 text-center text-sm  md:text-xl">
              Nelsa is a comprehensive restaurant management platform that
              combines all the tools you need to run your restaurant in one
              place. Our software offers an intuitive and easy-to-use point of
              sale system, robust HR and payroll management features, seamless
              payment processing, and a suite of third-party integrations to
              help you optimize your operations, grow your revenue, and deliver
              an exceptional guest experience.
            </p>

            <motion.a
              href="https://hxditw01xh6.typeform.com/to/aKqnYgq0"
              target="_blank"
              class="bg-nelsa_blue text-black font-bold p-3 rounded-lg inline-flex items-center"
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

          {/* <motion.div
            className=""
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              className="rounded-lg cover"
              src={portrait}
              alt="landing.png"
            />
          </motion.div> */}
        </div>
      </div>
      <div className="bg-zinc-100 p-5 rounded-lg my-10 mb-20">
        <Animated
          animationIn="fadeInRight"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="md:flex md:flex-row flex flex-col justify-between p-5 md:p-10 max-w-screen-xl mx-auto rounded-lg gap-5">
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <div className="flex flex-row gap-3">
                <div className="">
                  <h1 className="text-2xl font-bold text-zinc-900 font-ralway">
                    Point of Sale
                  </h1>
                  <p className="leading-snug tracking-tight text-zinc-700 w-44 mt-2">
                    A point of sale platform powerful enough to run your entire
                    restaurant.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <div className="flex flex-row gap-3">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-900 font-ralway">
                    Online Ordering
                  </h1>
                  <p className="leading-snug tracking-tight text-zinc-700 w-44 mt-2">
                    Allow guests to easily order directly from your website
                    across any device - commission-free.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <div className="flex flex-row gap-2">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-900 font-ralway">
                    Inventory
                  </h1>
                  <p className="leading-snug tracking-tight text-zinc-700 w-44 mt-2">
                    Get the data you need to control costs and drive menu
                    profitability.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <div className="flex flex-row gap-3">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-900 font-ralway">
                    SMS & Email Marketing
                  </h1>
                  <p className="leading-snug tracking-tight text-zinc-700 w-44 mt-2">
                    Connect with guests and increase repeat visits with Email
                    Marketing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Animated>
        <Animated
          animationIn="fadeInRight"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="md:flex md:flex-row flex flex-col justify-between p-5 md:p-10 max-w-screen-xl mx-auto rounded-lg gap-5">
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <div className="flex flex-row gap-3">
                <div className="">
                  <h1 className="text-2xl font-bold text-zinc-900 font-ralway">
                    Loyalty & Gift Cards
                  </h1>
                  <p className="leading-snug tracking-tight text-zinc-700 w-44 mt-2">
                    Bring your guests back in the door with a simple, integrated
                    rewards program.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <div className="flex flex-row gap-3">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-900 font-ralway">
                    Reporting & Analytics
                  </h1>
                  <p className="leading-snug tracking-tight text-zinc-700 w-44 mt-2">
                    Dig into performance metrics to access business insights you
                    crave.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <div className="flex flex-row gap-2">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-900 font-ralway">
                    HR & Payroll
                  </h1>
                  <p className="leading-snug tracking-tight text-zinc-700 w-44 mt-2">
                    Enable your HR staff to focus on people, not paperwork.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <div className="flex flex-row gap-3">
                <div>
                  <h1 className="text-2xl font-bold text-zinc-900 font-ralway">
                    Multi Location
                  </h1>
                  <p className="leading-snug tracking-tight text-zinc-700 w-44 mt-2">
                    Standardize your operations and easily configure menus at
                    all your locations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Animated>
      </div>
    </div>
  );
}

export default Landing;
