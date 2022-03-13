import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="max-w-screen min-h-full font-open text-neutral-700">
      <div className="bg-teal-900 p-4">
        <Header />
      </div>
      <Outlet />
      <div className="min-h-full bg-teal-900">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
