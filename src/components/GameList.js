import React from 'react';
import GameItem from './GameItem';

const GameList = ({ games, removeGame }) => {
  console.log('GameList Component Rendered');
  return (
    <div>
      {games.length > 0 ? (
        games.map((game) => (
          <GameItem key={game.id} game={game} removeGame={removeGame} />
        ))
      ) : (
        <p>Your games are in another castle.</p>
      )}
    </div>
  );
};

export default GameList;
