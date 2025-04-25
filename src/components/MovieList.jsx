import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../store";

function MovieList() {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => {
    return state.movies;
  });
  console.log(movieList);

  const handleRemove = (movie) => {
    console.log("Inside handle remove");
    dispatch(removeMovie(movie))
  };

  const handleAddMovie = () => {
    const newMovie = "New Movie" + Math.ceil(Math.random() * 100);

    dispatch(addMovie(newMovie));
  };

  const ListMovies = movieList.map((movie, index) => {
    return (
      <li key={index}>
        {movie}
        <button onClick={() => handleRemove(movie)}>Remove</button>
      </li>
    );
  });

  return (
    <div>
      <h2>Movie Playlist</h2>
      <button onClick={handleAddMovie}>+ Add Movie to Playlist</button>
      {ListMovies}
    </div>
  );
}

export default MovieList;
