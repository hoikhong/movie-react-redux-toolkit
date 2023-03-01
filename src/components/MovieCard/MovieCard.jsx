import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  //   console.log("props moive", props.movie.Poster);
  return (
    <div className="flex flex-col border border-white rounded-lg bg-red-400">
      <div className="card-image ">
        <img
          className="w-full h-[400px] md:h-[300px] lg:h-[450px] rounded-t-lg"
          src={movie.Poster}
          alt={movie.Title}
        />
      </div>
      <div className="card-content px-2 pt-2">
        <span>{movie.TItle}</span>
        <p>Year: {movie.Year}</p>
      </div>
      <div className="card-action px-2 py-4">
        <Link
          className="px-2 py-2 bg-gray-600 text-white rounded-md"
          to={`movie/${movie.imdbID}`}
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
