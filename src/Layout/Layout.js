import React from "react";

import Warning from "../components/Warning";
import Navbar from "../components/Navigation/Navbar";
import Alert from "../components/Alert";

const Layout = ({ children }) => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="bg-white">
        <Warning />
        <Navbar />
        <Alert />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
