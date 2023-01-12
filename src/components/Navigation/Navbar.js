import React from "react";

import { NavLink } from "react-router-dom";
import Routes from "./Routes";
import Logo from "./Logo";

const listRoutes = Routes.map((route, index) => (
  <NavLink
    exact
    to={route.path}
    className="uppercase hover:text-yellow-400 duration-150"
    key={index}
  >
    {route.label}
  </NavLink>
));

const Navbar = () => {
  return (
    <div className="h-20 flex items-center">
      <NavLink exact to="/">
        <Logo />
      </NavLink>
      <div className="flex space-x-8">{listRoutes}</div>
    </div>
  );
};

export default Navbar;
