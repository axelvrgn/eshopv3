import React, { useEffect, useState } from "react";

import Layout from "../Layout/Layout";
import Banner from "../components/Banner";
import Container from "../components/Container";
import Games from "../components/Game/Games";
import Filters from "../components/Game/Filters";

import { gameService } from "../services/gameService";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService
      .getAll()
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Layout>
        <Banner />
        <Container>
          <div className="flex justify-between">
            <div className="w-3/12">
              <Filters />
            </div>
            <div className="w-8/12">
              <Games gamesList={games} />
            </div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
