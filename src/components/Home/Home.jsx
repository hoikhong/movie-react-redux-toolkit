import React, { useState, useEffect } from "react";
import movieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useDispatch } from "react-redux";
// useDispatch ใช้เพื่อ update value -> store
import { addMovie } from "../../store/Reducer";

import MovieListing from "../MovieListing/MovieListing";
function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    const fetchMovie = async () => {
      const searchKey = search ? search : "thor";
      const res = await movieApi.get(
        `?apikey=${APIKey}&s=${searchKey}&type=movie`
      );
      console.log("res", res.data.Search);
      setTimeout(() => {
        dispatch(addMovie(res.data.Search));
      }, 500);
    };
    fetchMovie();
  }, [search]);
  return (
    <div className="container mx-auto pb-12">
      <div className="flex flex-col justify-center items-center">
        <input
          className="my-4 rounded-xl px-8 py-2 border"
          type="text"
          placeholder="Search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <MovieListing />
      </div>
    </div>
  );
}

export default Home;

// aafcf985
