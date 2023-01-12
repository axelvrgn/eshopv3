import React from "react";

const Card = ({ game }) => {
  return (
    <div className="overflow-hidden drop-shadow-md bg-cover bg-center flex flex-col ">
      <div
        className="h-80 bg-cover bg-top"
        style={{
          backgroundImage: `url(${game.background_image})`,
        }}
      ></div>
      <div className="flex items-center bg-white px-4 h-24 w-full ">
        <div className="text-xl">{game.name}</div>
      </div>
    </div>
  );
};

export default Card;
