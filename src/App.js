import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import axios from "axios";
import NavBar from "./components/navbar";
import MoviesInfo from "./components/moviesInfo";
import { DefaultMovie } from "./components/bydefaultMovie";
import MovieList from "./components/movieList";

function App() {
  const url = "https://www.omdbapi.com/?apikey=97b2ff0f";
  const [movies, setMovies] = useState(DefaultMovie);
  const [query, setQuery] = useState("");

  const searchMovies = async (e) => {
    if (e.key === "Enter" && query !== "") {
      const movie = await axios.get(`${url}&s=${query}`);
      setMovies(movie.data.Search);
    }
  };

  const handleSearch = (e) => {
    let text = e.target.value;
    setQuery(text);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar handleSearch={handleSearch} searchMovies={searchMovies} />
        <div className="div2">
          <Switch>
            <Route
              path="/"
              exact
              render={() => <MoviesInfo movies={movies} />}
            />
            <Route
              path="/movieList"
              exact
              render={() => <MovieList movies={movies} />}
            />
            {/* <MoviesInfo movies={movies} /> */}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
