import React from "react";
import { Link } from "react-router-dom";

const Card = ({ game }) => {
  return (
    <Link to={`/games/${game.id}`}>
      <div className="overflow-hidden drop-shadow-md bg-cover bg-center flex flex-col bg-white hover:bg-yellow-0 hover:scale-105 duration-300	">
        <div
          className="h-80 bg-cover bg-top"
          style={{
            backgroundImage: `url(${game.background_image})`,
          }}
        ></div>
        <div className="flex items-center  px-4 h-24 w-full ">
          <div className="text-xl">{game.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
