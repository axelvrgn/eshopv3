import React from "react";

import Warning from "../components/Warning";
import Navbar from "../components/Navigation/Navbar";
import Alert from "../components/Alert";
import Banner from "../components/Banner";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="bg-white">
        <Warning />
        <Navbar />
        <Alert />
        <Banner />
      </div>

      <main className="w-10/12 mx-auto min-h-screen p-8">{children}</main>
    </div>
  );
};

export default Layout;
