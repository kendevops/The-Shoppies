import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Nominated from "./components/Nominated";
import SearchAppBar from "./components/SearchAppBar";
import Swal from "sweetalert2";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominated, setNominated] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=14454eea`;
    const response = await fetch(url);
    const json = await response.json();
    if (json.Search) {
      setMovies(json.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const nominatedMovie = JSON.parse(localStorage.getItem("nominated-movies"));
    setNominated(nominatedMovie);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("nominated-movies", JSON.stringify(items));
  };
  const addNominated = (movie) => {
    const newNominatedList = [...nominated, movie];
    if (nominated.length < 5) {
      setNominated(newNominatedList);
      saveToLocalStorage(newNominatedList);
      Swal.fire("Nice!", "Movie Nominated!", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have Reached Your Maximum Nominations!!!",
      });
    }
  };

  const removeNomination = (movie) => {
    const newNominatedList = nominated.filter(
      (nominate) => nominate.imdbID !== movie.imdbID
    );
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this movie from Nomination",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.value) {
        setNominated(newNominatedList);
        saveToLocalStorage(newNominatedList);
      }
    });
  };
  return (
    <div className="code">
      <SearchAppBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="heading">
        <h1>Search Results</h1>
      </div>
      <div className="movie">
        <MovieList movies={movies} handleNominateClick={addNominated} />
      </div>
      <div className="heading">
        <h1>Nominated Movies</h1>
      </div>
      <div className="movie">
        <Nominated movies={nominated} handleNominateClick={removeNomination} />
      </div>
    </div>
  );
};

export default App;
