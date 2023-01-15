import React from "react";

import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-cover bg-center h-[320px] flex justify-center items-center bg-[url('https://store.ubi.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dw27e9e8be/images/category-banners/CatBan_new-release-feb22_1920x300_desk.jpg')]">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-3xl font-semibold uppercase ">eshop v3</div>
        <div className="text-lg">Achetez, téléchargez et jouez !</div>
        <button
          type="button"
          className="bg-yellow-400 px-4 py-2 rounded-full text-white"
          onClick={() => navigate("/games")}
        >
          Découvrir nos jeux
        </button>
      </div>
    </div>
  );
};

export default Banner;
