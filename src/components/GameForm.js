import React, { useState } from 'react';

function GameForm({ addGame }) {
  const [formData, setFormData] = useState({
    title: '',
    platform: '',
    genre: '',
    isComplete: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addGame(formData);
    setFormData({
      title: '',
      platform: '',
      genre: '',
      isComplete: false
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Platform:</label>
        <input type="text" name="platform" value={formData.platform} onChange={handleChange} required />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" name="genre" value={formData.genre} onChange={handleChange} required />
      </div>
      <div>
        <label>
          Complete in Box:
          <input type="checkbox" name="isComplete" checked={formData.isComplete} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Add Game</button>
    </form>
  );
}

export default GameForm;
