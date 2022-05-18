import React from "react";

const Riders = () => {
  return (
    <div className={`bg-white p-4`}>
      <div className="flex flex-col-reverse md:flex md:flex-row justify-between  px-15 py-8 max-w-screen-xl gap-10 mx-auto text-black pt-5 md:pt-10 ">
        <div className="md:w-3/5 mb-24">
          <h1 className="text-4xl md:text-7xl font-syne font-semibold tracking-wide leading-snug md:leading-tight pb-2 mt-0 md:mt-20">
            Quality Ingredients Delivered to Your Kitchen.
          </h1>
          <p className="leading-relaxed mt-2">
            Join our community of over{" "}
            <span className="font-bold text-xl">500+</span> leading caterers,
            restaurateurs and hospitality businesses who enjoy better buying
            power whilst ensuring fair pricing, traceability and quality across
            all produce categories.
          </p>
        </div>

        <div className="md:w-2/5 relative">
          <div className="absolute -right-1 top-32 flex  font-rubik flex-col py-5 px-5 rounded-md shadow-xl bg-white/50 backdrop-blur-xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
            <div className="font-bold text-black">Fast delivery</div>
            <div className="font-bold text-black">2 hours delivery 🚀</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riders;
