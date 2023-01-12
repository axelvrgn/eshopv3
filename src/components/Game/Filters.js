import React, { useEffect, useState } from "react";

import axios from "axios";

const Filters = () => {
  const [platforms, setPlatforms] = useState([]);
  const [genres, setGenres] = useState([]);

  const plateformOptions = {
    method: "GET",
    url: "https://api.rawg.io/api/platforms?token&key=2f67919660e14d84ade60e3c149b38f9",
    params: { page_size: 10 },
  };

  const genreOptions = {
    method: "GET",
    url: "https://api.rawg.io/api/genres?token&key=2f67919660e14d84ade60e3c149b38f9",
    params: { page_size: 10 },
  };

  useEffect(() => {
    axios
      .request(plateformOptions)
      .then((res) => {
        setPlatforms(res.data.results);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    axios
      .request(genreOptions)
      .then((res) => {
        setGenres(res.data.results);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-white flex flex-col p-4 space-y-4">
      <div className="">
        <div className="font-bold text-lg">Filtrer</div>
      </div>
      <div>
        <div>Plateformes</div>
        <div className="flex flex-col space-y-1">
          {platforms.map((platform, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <input
                type="checkbox"
                id={platform.name}
                name={platform.name}
                className="default:ring-2"
              />
              <label for={platform.name} className="text-yellow-500">
                {platform.name}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>Genre</div>
        <div className="flex flex-col space-y-1">
          {genres.map((genre, index) => (
            <div className="flex items-center space-x-4" key={index}>
              <input
                type="checkbox"
                id={genre.name}
                name={genre.name}
                className="default:ring-2"
              />
              <label for={genre.name} className="text-yellow-500">
                {genre.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
