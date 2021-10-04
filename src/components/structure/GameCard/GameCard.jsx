import React from "react";
import './GameCard.css'

const GameCard = (props) => {
  const game = props.game;

  return (
    <div className="game-card">
    <img src={game.cover} alt={game.title} />
      <h4>{game.title}</h4>
    </div>
  );
};

export default GameCard;
