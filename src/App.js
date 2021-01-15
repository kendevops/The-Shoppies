import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import SearchAppBar from "./components/SearchAppBar";

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState("");

  const getMovies = async () => {
    const url = "http://www.omdbapi.com/?s=avengers&apikey=14454eea";
    const response = await fetch(url);
    const json = await response.json();

    setMovies(json.Search);
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="code">
      <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="movie">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
