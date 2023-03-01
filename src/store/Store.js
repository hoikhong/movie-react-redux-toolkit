import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Reducer";

// configureStore -> ตั้งค่า store
export default configureStore({
  reducer: {
    movies: movieSlice,
  },
});
