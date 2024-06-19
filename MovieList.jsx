import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.title} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
