import React, { useEffect, useState } from "react";

import axios from "axios";
import Card from "./Card";
import Filters from "./Filters";

const Games = () => {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(20);

  /*
  const options2 = {
    method: "GET",
    url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
    headers: {
      "X-RapidAPI-Key": "476b573e1cmsh7ef70e7dcfffb24p12fc11jsn65502de4ae56",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  */

  const options = {
    method: "GET",
    url: "https://api.rawg.io/api/games?token&key=2f67919660e14d84ade60e3c149b38f9",
    params: { page_size: 18 },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        setData(res.data.results);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex justify-between">
      <div className="w-3/12">
        <Filters />
      </div>
      <div className="w-8/12 grid grid-cols-3 gap-8">
        {data.slice(0, rangeValue).map((game, index) => (
          <Card key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;
