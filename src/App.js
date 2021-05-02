import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import CountryScoreTable from './CountryScoreTable';
import AllScores from './data/score';
import SortButton from './SortButton';
import WorldWideTable from "./WorldWideTable";

function App() {
  const [sortBy, setSortBy] = useState(null);

  const toggleSort = () => {
    let newSortBy = sortBy;

    if (sortBy === null || sortBy === 'descending') {
      newSortBy = 'ascending';
    } else {
      newSortBy = 'descending';
    }
    setSortBy(newSortBy);
  };

  const scoresSortedByCountry = AllScores.sort(
    (previousCountry, currentCountry) => {
      return previousCountry.name.localeCompare(currentCountry.name);
    }
  );

  return (
    <div className='App'>
      <Header />
      <SortButton handleSort={toggleSort} sortBy={sortBy} />
      <WorldWideTable allScores={AllScores} sortBy={sortBy} />
      {scoresSortedByCountry.map((country, index) => {
        return (
          <CountryScoreTable key={index} country={country} sortBy={sortBy} />
        );
      })}
    </div>
  );
}

export default App;