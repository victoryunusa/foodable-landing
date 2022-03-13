import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="min-w-screen m-0 p-0 font-open text-neutral-700 overflow-x-hidden">
      <div className="bg-teal-900 p-4">
        <Header />
      </div>
      <Outlet />
      <div className="bg-teal-900">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
