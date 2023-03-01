import React, { useState, useEffect } from "react";
import movieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useParams } from "react-router-dom";
// useParams -> get params/query
function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      console.log("isLoading 1", isLoading);

      try {
        const res = await movieApi.get(`?apikey=${APIKey}&i=${id}&plot=full`);
        console.log("res detail", res.data);
        setMovie(res.data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(true);
      console.log("isLoading 2", isLoading);
    };
    fetchDetail();
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <div className="movie-detail-container flex justify-between gap-x-4 py-4">
          <div className="movie-detail-image h-[450px] w-[450px]">
            <img
              className="w-full h-full"
              src={movie.Poster}
              alt={movie.Title}
            />
          </div>
          <div className="movie-detail-info mt-10">
            <h3 className="font-bold text-3xl">{movie.Title}</h3>
            <p className="my-[1rem]">{movie.Plot}</p>
            <p className="font-bold">Released: {movie.Released}</p>
          </div>
        </div>
      ) : (
        <h4>Loading.....</h4>
      )}
    </div>
  );
}

export default MovieDetail;
