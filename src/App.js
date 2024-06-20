import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Header from './components/Header';
import GameForm from './components/GameForm';
import GameList from './components/GameList';
import SearchFilter from './components/SearchFilter';
import Footer from './components/Footer';

function App() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('');

  const filteredGames = games.filter((game) => {
    return game.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const removeGame = (id) => {
    setGames(prevGames => prevGames.filter(game => game.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="app-content">
        <GameForm setGames={setGames} />
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
