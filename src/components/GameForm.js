import React, { useState } from 'react';

function GameForm({ setGames }) {
  const [formData, setFormData] = useState({
    title: '',
    platform: '',
    genre: '',
    completeInBox: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGame = { ...formData, id: Date.now() };
    setGames((prevGames) => [...prevGames, newGame]);
    setFormData({
      title: '',
      platform: '',
      genre: '',
      completeInBox: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="game-form">
      <div>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Platform:
          <input type="text" name="platform" value={formData.platform} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Genre:
          <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Complete in Box:
          <input
            type="checkbox"
            name="completeInBox"
            checked={formData.completeInBox}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Add Game</button>
    </form>
  );
}

export default GameForm;
