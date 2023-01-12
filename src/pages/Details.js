import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Layout from "../Layout/Layout";
import Container from "../components/Container";
import { gameService } from "../services/gameService";

const Details = () => {
  const gameId = useParams().gameId;

  const [game, setGame] = useState([]);

  useEffect(() => {
    gameService
      .getDetails(gameId)
      .then((res) => {
        setGame(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Layout>
        <Container>
          <div className="text-xl">{game.name}</div>
          <div className="flex flex-col">
            <div>Description :</div>
            <div>{game.description_raw}</div>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Details;
