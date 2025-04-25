import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "../store";

function MovieList() {
  const dispatch = useDispatch();

  // Select the list of movies from the Redux store
  const movieList = useSelector((state) => {
    return state.movies;
  });
  console.log(movieList);

  // Function to handle removing a movie from the playlist
  const handleRemove = (movie) => {
    console.log("Inside handle remove");
    dispatch(removeMovie(movie)); // Dispatch the removeMovie action
  };

  // Function to handle adding a new movie to the playlist
  const handleAddMovie = () => {
    const newMovie = "New Movie" + Math.ceil(Math.random() * 100); // Generate a random movie name
    dispatch(addMovie(newMovie)); // Dispatch the addMovie action
  };

  // Map over the movie list to render each movie with a remove button
  const ListMovies = movieList.map((movie, index) => {
    return (
      <li key={index}>
        {movie}
        <button onClick={() => handleRemove(movie)}>Remove</button> {/* Remove button for each movie */}
      </li>
    );
  });

  return (
    <div>
      <h2>Movie Playlist</h2>
      {/* Button to add a new movie to the playlist */}
      <button onClick={handleAddMovie}>+ Add Movie to Playlist</button>
      {/* Render the list of movies */}
      {ListMovies}
    </div>
  );
}

export default MovieList;
