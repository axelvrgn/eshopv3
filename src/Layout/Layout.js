import React from "react";

import Warning from "../components/Warning";
import Navbar from "../components/Navigation/Navbar";
import Alert from "../components/Alert";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col bg-slate-100 h-min-screen relative">
      <Warning />
      <Navbar />
      <Alert />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
