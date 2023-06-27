import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieForm from './MovieForm';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      
    </div>
  );
};

const Description = () => {
  return (
    <div>
      <h2>Movie Description and Trailer Page</h2>
      
    </div>
  );
};

const App = () => {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = newMovie => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <BrowserRouter>
      <div className="app">
        <h1>Movie Collection</h1>
        <Filter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/description" element={<Description />} />
        </Routes>
        <MovieList movies={movies} />
        <MovieForm onAddMovie={handleAddMovie} />
      </div>
    </BrowserRouter>
  );
};

export default App;
