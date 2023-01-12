import React, { useState } from "react";

import Card from "./Card";

const Games = ({ gamesList }) => {
  const [rangeValue, setRangeValue] = useState(20);
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-right">Résultats : {gamesList.length}</div>
      <div className="grid grid-cols-3 gap-8">
        {gamesList.slice(0, rangeValue).map((game, index) => (
          <Card key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
