import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Nominated from "./components/Nominated";
import SearchAppBar from "./components/SearchAppBar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominate, setNominate] = useState([]);
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
    const newNominatedList = [...nominate, movie];
    if (nominate.length < 5) {
      setNominate(newNominatedList);
    } else {
      alert("Maximum Nomination Done!!!");
    }
  };
  return (
    <div className="code">
      <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="movie">
        <MovieList movies={movies} handleNominateClick={addNominated} />
      </div>
      <div>
        <h1>Nominated Movies</h1>
      </div>
      <div className="movie">
        <Nominated movies={nominate} handleNominateClick={addNominated} />
      </div>
    </div>
  );
};

export default App;
