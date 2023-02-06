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
          className="relative inline-flex items-center px-10 py-2 overflow-hidden text-lg font-medium text-yellow-400 border-2 border-yellow-400 hover:text-white group hover:bg-white-400"
          onClick={() => navigate("/games")}
        >
          <span className="absolute left-0 block w-full h-0 transition-all bg-yellow-400 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
          <span className="absolute right-0 flex items-center justify-start w-8 h8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
          <span class="relative">Découvrir nos jeux</span>
        </button>
        {/* <button
          type="button"
          className="bg-yellow-400 px-4 py-2 rounded-full text-white"
          onClick={() => navigate("/games")}
        >
          Découvrir nos jeux
        </button> */}
      </div>
    </div>
  );
};

export default Banner;
