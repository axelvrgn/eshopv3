import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import Routes from "./Routes";
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
          <div className="flex items-center ">
            <div className="flex space-x-8 flex-wrap">{listRoutes}</div>
          </div>
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
          <div>
            <button className="px-4">Connexion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
