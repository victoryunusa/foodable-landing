import React from "react";
import { Outlet } from "react-router-dom";
import LandingFooter from "../components/LandingFooter";
import LandingHeader from "../components/LandingHeader";

const LandingLayout = () => {
  return (
    <div className="bg-[#191716] min-w-screen m-0 p-0 antialiased text-md leading-relaxed  font-outfit text-white overflow-x-hidden">
      <div className=" p-4">
        <LandingHeader />
      </div>
      <Outlet />
      <div className="bg-[#191716]">
        <LandingFooter />
      </div>
    </div>
  );
};

export default LandingLayout;
