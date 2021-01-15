import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import SearchAppBar from "./components/SearchAppBar";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=14454eea`;
    const response = await fetch(url);
    const json = await response.json();
    if (json.Search) {
      setMovies(json.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);
  return (
    <div className="code">
      <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="movie-container">
        <MovieList movies={movies} className="movie"/>
      </div>
    </div>
  );
};

export default App;
