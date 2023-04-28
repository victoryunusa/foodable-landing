import React from "react";
import { Outlet } from "react-router-dom";
import LandingHeader from "../components/LandingHeader";

const LandingLayout = () => {
  return (
    <div className="min-w-screen m-0 p-0  font-outfit text-zinc-900 overflow-x-hidden">
      <div className="bg-white p-4">
        <LandingHeader />
      </div>
      <Outlet />
    </div>
  );
};

export default LandingLayout;
