import React, { useEffect, useState } from "react";

import Icon from "@mdi/react";
import { mdiChevronRight, mdiChevronLeft, mdiMagnify } from "@mdi/js";

import Layout from "../Layout/Layout";
import Container from "../components/Container";
import Games from "../components/Game/Games";
import Filters from "../components/Game/Filters";
import FormControl from "../components/FormControl";
import FormField from "../components/FormField";

import { gameService } from "../services/gameService";

const VideoGames = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [search, setSearch] = useState("");
  const [platforms, setPlatforms] = useState("");
  const [genres, setGenres] = useState("");

  useEffect(() => {
    gameService
      .getByPage(page, pageSize)
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [page, pageSize]);

  const searchGames = () => {
    gameService
      .getBySearch(search, platforms, genres)
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleGenre = (genre) => {
    let splitedGenres = genres.split(",");
    if (splitedGenres.includes(genre)) {
      splitedGenres.splice(splitedGenres.indexOf(genre), 1);
    } else splitedGenres.push(genre);
    setGenres(splitedGenres.join());
  };

  const handlePlatform = (platform) => {
    let splitedPlatforms = platforms.split(",");
    if (splitedPlatforms.includes(platform)) {
      splitedPlatforms.splice(splitedPlatforms.indexOf(platform), 1);
    } else splitedPlatforms.push(platform);

    setPlatforms(splitedPlatforms.join());
  };

  return (
    <div>
      <Layout>
        <Container>
          <div className="flex justify-between">
            <div className="w-3/12">
              <Filters
                handleGenre={handleGenre}
                handlePlatform={handlePlatform}
              />
            </div>
            <div className="w-8/12">
              <form className="flex flex-wrap space-x-2">
                <FormField>
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
                  <Icon path={mdiMagnify} size={1} />
                </button>
              </form>
              <Games gamesList={games} />
              <div className="flex justify-between py-8">
                <button
                  onClick={handlePreviousPage}
                  disabled={page < 2}
                  className="flex"
                >
                  <Icon path={mdiChevronLeft} size={1} />
                  Page précédente
                </button>
                <button onClick={handleNextPage} className="flex">
                  Page suivante
                  <Icon path={mdiChevronRight} size={1} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default VideoGames;
