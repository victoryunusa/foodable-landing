import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Animated } from "react-animated-css";
import retail from "../assets/images/money.png";
import delivery from "../assets/images/delivery-bike.png";
import environment from "../assets/images/barcode-scanner (1).png";
import android from "../assets/images/playstore.svg";
import apple from "../assets/images/apple-logo.svg";
import portrait from "../assets/images/main-lading.png";
import iphone from "../assets/images/iphone-1.png";

const Home = () => {
  const register = () => {
    window.open("https://foodable.ng/");
  };

  return (
    <>
      <div className={`bg-white p-4`}>
        <div className="flex flex-col-reverse md:flex md:flex-row justify-between  px-15 py-5 max-w-screen-xl gap-10 mx-auto text-black pt-5 md:pt-10 ">
          <div className="md:w-3/5 mb-2">
            <h1 className="text-5xl md:text-7xl font-fredoka font-normal tracking-wide leading-snug md:leading-tight mt-0 md:mt-20">
              Fresh{" "}
              <span className="text-green-500">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "Ingredients",
                    "Meat",
                    "Fish",
                    "Veggies",
                    "Fruits",
                    "Drinks",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-fredoka font-normal tracking-wide leading-snug md:leading-tight pb-2">
              Delivered to Your Kitchen in minutes.
            </h1>
            <p className="leading-relaxed mt-5 text-xl text-zinc-600">
              Join our community of over{" "}
              <span className="font-bold text-xl ">500+</span> leading caterers,
              restaurateurs and hospitality businesses who enjoy better buying
              power whilst ensuring fair pricing, traceability and quality
              across all produce categories.
            </p>
            <div className="flex flex-row gap-2 md:gap-7 justify-start mt-16">
              <motion.button
                onClick={() => register()}
                class="bg-black text-white font-medium p-3 rounded-xl inline-flex items-center w-48"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm ml-2 flex flex-row">
                  Get started for free{" "}
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
              </motion.button>
              <motion.abutton
                class="bg-zinc-100 text-black font-medium p-3 rounded-xl inline-flex items-center w-43 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-sm ml-2 flex flex-row">
                  Contact sales{" "}
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
              </motion.abutton>
            </div>
          </div>

          <motion.div
            className="md:w-2/5"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              className="self-end  md:h-full"
              src={portrait}
              alt="landing.png"
            />
          </motion.div>
        </div>
      </div>

      <div className="bg-white p-4 mb-20">
        <Animated
          animationIn="fadeInRight"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="md:flex md:flex-row flex flex-col justify-between py-2 max-w-screen-xl mx-auto gap-2">
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <img src={retail} alt="retail" className="w-12 md:w-16 pb-2" />
              <h1 className="text-2xl font-bold mb-1">Save money</h1>
              <p className="leading-relaxed text-lg text-zinc-600">
                Better prices than your local market & no minimum order value.
              </p>
            </div>
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <img
                src={delivery}
                alt="delivery"
                className="w-12 md:w-16 pb-2"
              />
              <h1 className="text-2xl font-bold mb-1">Take control</h1>
              <p className="leading-relaxed text-lg text-zinc-600">
                Timing is everything. We’ll be at your door before you know it.
              </p>
            </div>
            <div className="md:w-1/4 mb-7 md:mb-0 rounded-md">
              <img
                src={environment}
                alt="environment"
                className="w-12 md:w-16 pb-2"
              />
              <h1 className="text-2xl font-bold mb-1">Be Sustainable</h1>
              <p className="leading-relaxed text-lg text-zinc-600">
                We guarantee traceability hence increasing accountability and
                safety.
              </p>
            </div>
          </div>
        </Animated>
      </div>
      <div className=" bg-zinc-100 p-4">
        <div className="md:flex justify-start  px-15 py-8 max-w-screen-xl mx-auto gap-5">
          <div className="flex md:flex-row flex-col-reverse w-full">
            <div className="md:w-2/5 flex flex-col">
              <div className="bg-white p-10 my-3 rounded-lg">
                <div className="flex flex-row w-full justify-center items-center">
                  <div className="w-1/4">
                    <svg
                      className="w-12 h-12 text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.4">
                        <path
                          d="M8.5 14.25C8.5 16.17 10.08 17.75 12 17.75C13.92 17.75 15.5 16.17 15.5 14.25"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.80945 2L5.18945 5.63"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.1895 2L18.8095 5.63"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <path
                        d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>
                  <div className="w-3/4">
                    <h1 className="font-bold text-2xl">Add items to cart</h1>
                    <h1 className="font-normal text-lg text-zinc-600 mt-1">
                      Sign in and collect all your produce to cart.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 my-3 rounded-lg">
                <div className="flex flex-row w-full justify-center items-center">
                  <div className="w-1/4">
                    <svg
                      className="w-12 h-12 text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 10H22"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.5502 20.4998H6.44025C2.89025 20.4998 1.99023 19.6198 1.99023 16.1098V7.88977C1.99023 4.70977 2.73026 3.68977 5.52026 3.52977C5.80026 3.51977 6.11025 3.50977 6.44025 3.50977H17.5502C21.1002 3.50977 22.0002 4.38977 22.0002 7.89977V12.3098"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M6 16H10"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M16.4395 18L17.4294 18.99L19.5594 17.02"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-3/4">
                    <h1 className="font-bold text-2xl">Continue to payment</h1>
                    <h1 className="font-normal text-lg text-zinc-600 mt-1">
                      Choose to pay now, pay on delivery or pay later.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="bg-white p-10 my-3 rounded-lg">
                <div className="flex flex-row w-full justify-center items-center">
                  <div className="w-1/4">
                    <svg
                      className="w-12 h-12 text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.5512 2H9.45117C7.65117 2 7.25118 2.90001 7.02118 4.01001L6.20117 7.92999H17.8012L16.9812 4.01001C16.7512 2.90001 16.3512 2 14.5512 2Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.2405 14.3199C19.3205 15.1699 18.6405 15.9 17.7705 15.9H16.4105C15.6305 15.9 15.5205 15.57 15.3805 15.15L15.2305 14.7199C15.0305 14.1299 14.9005 13.7299 13.8505 13.7299H10.1405C9.10054 13.7299 8.94054 14.1799 8.76054 14.7199L8.61054 15.15C8.47054 15.56 8.36054 15.9 7.58054 15.9H6.22054C5.35054 15.9 4.67054 15.1699 4.75054 14.3199L5.16055 9.89996C5.26055 8.80996 5.47054 7.91992 7.37054 7.91992H16.6205C18.5205 7.91992 18.7305 8.80996 18.8305 9.89996L19.2405 14.3199Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.2007 5.75H5.4707"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.5308 5.75H17.8008"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M7.65039 10.8301H9.8204"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M14.1797 10.8301H16.3497"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M12 17V18"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M12 21V22"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M3 18L2 22"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M21 18L22 22"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-3/4">
                    <h1 className="font-bold text-2xl">
                      Wait for your delivery
                    </h1>
                    <h1 className="font-normal text-lg text-zinc-600 mt-1">
                      We'll deliver as early as possible.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 flex flex-col justify-center md:p-28 p-5">
              <div ClassName="flex ">
                <h1 className="font-fredoka text-5xl">
                  A few simple steps to get started
                </h1>
                <h3 className="font-normal text-lg text-zinc-600 mt-1">
                  We believe that food should be delicious, ingredients should
                  be high quality, and meals should be easy to prepare. We make
                  it easy to stock up on great products from trusted brands at
                  an attractive price.
                </h3>
              </div>
              <div className="mt-10">
                <motion.button
                  onClick={() => register()}
                  class="bg-black text-white border border-black font-medium p-3 rounded-xl inline-flex items-center w-48"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-sm ml-2 flex flex-row">
                    Get started for free{" "}
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
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="md:flex justify-between max-w-screen-xl mx-auto bg-black my-24 rounded-md">
          <div className="md:w-3/5">
            <div className="md:p-16 p-6 flex flex-col justify-between">
              <div className="flex flex-col">
                <h1 className="font-fredoka font-normal text-5xl text-white mb-2">
                  Stock and restock with ease
                </h1>
                <h3 className="font-normal text-lg text-white">
                  Handle everything from making orders and approving payments,
                  to checking balances, seeing your business performance and
                  lots more.
                </h3>
              </div>

              <div className="flex flex-row gap-2 md:gap-7 pt-10">
                <button class="bg-white text-black border gap-2 border-black font-medium mt-2 md:mt-0  p-3 rounded-xl inline-flex justify-center items-center md:w-42 w-44">
                  <img
                    className="md:h-6 md:w-6 h-4 w-4"
                    src={apple}
                    alt="apple"
                  />{" "}
                  <span className="md:text-sm text-xs">Get on iPhone</span>
                </button>
                <button class="bg-white text-black border gap-2 border-black font-medium mt-2 md:mt-0 p-3 rounded-xl inline-flex justify-center items-center md:w-42 w-44">
                  <img
                    className="md:h-6 md:w-6 h-4 w-4"
                    src={android}
                    alt="android"
                  />{" "}
                  <span className="md:text-sm text-xs">Get on Android</span>
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <img className="self-end  w-full" src={iphone} alt="landing.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
