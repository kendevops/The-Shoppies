import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import SearchAppBar from "./components/SearchAppBar";

const App = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=14454eea";
    const response = await fetch(url);
    const json = await response.json();

    setMovies(json.search);
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="code">
      <SearchAppBar />
      <div className="movie">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
