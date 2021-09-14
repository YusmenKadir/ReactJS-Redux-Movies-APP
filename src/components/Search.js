import React from "react";
import "../App.scss";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../store/actions";
const Search = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.moviesReducer.movies);

  console.log("movies are=>", movies);

  const searchMoviesHandler = useCallback(() => {
    dispatch(getMovies(term));
    setTerm("");
  }, [term, dispatch]);
  return (
    <div className="search">
      <div>
        <input
          type="text"
          placeholder="Search for movies..."
          onChange={(e) => setTerm(e.target.value)}
        />
        <button onClick={searchMoviesHandler}>Search</button>
      </div>
      <div className="movies-grid">
        {movies[0]?.length > 0 ? (
          movies[0]?.map((movie, index) => (
            <div key={movie?.imdbID + index} className="movies-grid-wrapper">
              <div className="movies-grid-info">
                <h3>Title: {movie?.Title}</h3>
                <h3>Year: {movie?.Year}</h3>
              </div>
              <div>
                <img src={movie?.Poster} alt="#" />
              </div>
            </div>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
};

export default Search;
