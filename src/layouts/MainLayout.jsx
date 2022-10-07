import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="min-w-screen m-0 p-0 antialiased text-base font-redhat font-semibold text-black overflow-x-hidden">
      <div className="bg-white p-4">
        <Header />
      </div>
      <Outlet />
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
