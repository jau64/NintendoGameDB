import React from 'react';

const GameItem = ({ game, removeGame }) => {
  console.log('GameItem Component Rendered');
  return (
    <div>
      <h3>{game.title}</h3>
      <p>Platform: {game.platform}</p>
      <p>Genre: {game.genre}</p>
      <p>Complete in Box: {game.completeInBox ? 'Yes' : 'No'}</p>
      <button onClick={() => removeGame(game.id)}>Remove</button>
    </div>
  );
};

export default GameItem;
