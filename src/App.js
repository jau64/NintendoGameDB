import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GameForm from './components/GameForm';
import GameList from './components/GameList';
import SearchFilter from './components/SearchFilter';
import Footer from './components/Footer';

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/games');
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };
    fetchGames();
  }, []);

  const addGame = async (game) => {
    try {
      const response = await fetch('http://localhost:5000/api/games', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(game)
      });
      const newGame = await response.json();
      setGames([...games, newGame]);
    } catch (error) {
      console.error('Error adding game:', error);
    }
  };

  const removeGame = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/games/${id}`, { method: 'DELETE' });
      setGames(games.filter(game => game.id !== id));
    } catch (error) {
      console.error('Error removing game:', error);
    }
  };

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="app">
      <Header />
      <div className="app-content">
        <GameForm addGame={addGame} />
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
        />
        <GameList games={filteredGames} removeGame={removeGame} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
