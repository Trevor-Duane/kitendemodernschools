import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import './Layout.css'
import { Outlet } from "react-router-dom";

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main className="main container-fluid g-0 p-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
