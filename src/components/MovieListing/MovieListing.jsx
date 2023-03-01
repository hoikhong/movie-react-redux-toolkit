import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
// useSelector ใช้เข้าถึงค่าใน store
function MovieListing() {
  const { movies } = useSelector((state) => state.movies);
  console.log("movie MovieListing", movies);
  return (
    <div className="mx-[1rem] py-4 grid justify-items-center  md:grid-cols-3 lg:grid-cols-4 gap-[1rem]">
      {/* {movies &&
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)} */}
      {movies &&
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)}
    </div>
  );
}

export default MovieListing;
