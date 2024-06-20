import React from 'react';

function SearchFilter({ searchTerm, setSearchTerm, filter, setFilter }) {
  console.log('SearchFilter Component Rendered');
  return (
    <div className="search-filter">
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="platform">Platform</option>
          <option value="genre">Genre</option>
          <option value="completeInBox">Complete in Box</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;
