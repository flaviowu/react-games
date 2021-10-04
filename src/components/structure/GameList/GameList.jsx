import React, { useState, useEffect } from "react";
import GameCard from "../GameCard/GameCard";
import Api from "../../../Api/Api";
import "./GameList.css"

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
      HandleRefreshData()
  }, []);

  const HandleRefreshData = async () => {
    const response = await Api.getGames();
    const data = await response.json();
    setGames(data);
    console.log(games);
  };

  return (
    <div className="game-card-list">
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <GameCard game={game} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
