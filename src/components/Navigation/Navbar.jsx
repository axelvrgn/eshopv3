import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Routes from "./Routes";
import GuestRoutes from "./GuestRoutes";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";

let activeStyle = {
  border: "yellow",
};

const listRoutes = Routes.map((route, index) => (
  <NavLink
    to={route.path}
    className={({ isActive }) =>
      isActive
        ? "border-b-4 border-yellow-400"
        : "border-b-4 border-transparent"
    }
    key={index}
  >
    <div className="uppercase hover:text-yellow-400 duration-150 h-16 flex items-center  font-semibold">
      {route.label}
    </div>
  </NavLink>
));

const guestRoutes = GuestRoutes.map((route, index) => (
  <NavLink
    to={route.path}
    className={({ isActive }) =>
      isActive
        ? "border-b-4 border-yellow-400"
        : "border-b-4 border-transparent"
    }
    key={index}
  >
    <div className="flex items-center text-white bg-yellow-400 border border-yellow-400 px-3 py-2 rounded-full hover:bg-white hover:text-yellow-400 duration-150">
      {route.label}
    </div>
  </NavLink>
));

const Navbar = () => {
  const [search, setSearch] = useState("");

  const searchGames = () => {
    console.log("Recherche pas dispo...");
  };

  return (
    <div className="flex items-center justify-between sticky top-0 bg-white z-50">
      <NavLink to="/" className="border-b-4 border-transparent">
        <Logo />
      </NavLink>
      <BurgerMenu />
      <div className="lg:block w-full max-lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between ">
            <div className="flex space-x-8 flex-wrap">{listRoutes}</div>
          </div>
          <div className="px-4">{guestRoutes}</div>
          {/* <div>
        <form className="flex items-center space-x-2">
          <FormField label="">
            <FormControl
              type="text"
              value={search}
              placeholder="Rechercher par un nom, mot-clé..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </FormField>
          <button
            type="button"
            className="bg-yellow-400 p-2 rounded capitalize text-white"
            onClick={searchGames}
          >
            rechercher
          </button>
        </form>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
