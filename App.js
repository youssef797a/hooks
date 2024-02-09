import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Movie 1',
      description: 'Jumanji: The Next Level',
      posterURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQGz_VCHuaAoV6hBBS0AcXb761g-WpAxnwwxMLTxBXHlpKu-wHj',
      rating: 4.5
    },
    {
      title: 'Movie 2',
      description: 'Extraction 2',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/0/02/Extraction_2_poster.jpg',
      rating: 3.8
    },
    
  ]);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilter = ({ title, rate }) => {
    
  };

  return (
    <div>
      <h1>Movie Library</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
