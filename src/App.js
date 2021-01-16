import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Nominated from "./components/Nominated";
import SearchAppBar from "./components/SearchAppBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominated, setNominated] = useState([]);
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

  const addNominated = (movie) => {
    const newNominatedList = [...nominated, movie];
    if (nominated.length < 5) {
      setNominated(newNominatedList);
    } else {
      alert("Maximum Nomination Done!!!");
    }
  };

  const removeNomination = (movie) => {
    const newNominatedList = nominated.filter(
      (nominate) => nominate.imdbID !== movie.imdbID
    );

    setNominated(newNominatedList);
  };
  return (
    <div className="code">
      <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div>
        <h1>Search Results</h1>
      </div>
      <div className="movie">
        <MovieList movies={movies} handleNominateClick={addNominated} />
      </div>
      <div>
        <h1>Nominated Movies</h1>
      </div>
      <div className="movie">
        <Nominated movies={nominated} handleNominateClick={removeNomination} />
      </div>
    </div>
  );
};

export default App;
