import React, { useState } from "react";

import Logo from "./Logo";

import Icon from "@mdi/react";
import { mdiMenu, mdiClose } from "@mdi/js";

const BurgerMenu = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <div>
      <div className="lg:hidden flex items-center justify-between px-4">
        <button
          className="outline-none mobile-menu-button flex items-center z-20"
          onClick={() => setMenuActive(!isMenuActive)}
        >
          {isMenuActive ? (
            <Icon path={mdiClose} size={1} />
          ) : (
            <Icon path={mdiMenu} size={1} />
          )}
        </button>
      </div>
      {isMenuActive && (
        <div className="absolute rounded-lg top-2 border right-1 w-96 bg-white z-10 h-48 p-4">
          test
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
