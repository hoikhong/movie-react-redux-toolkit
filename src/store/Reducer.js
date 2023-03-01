import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movieListing",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies = action.payload;
      //   console.log(current(state));
    },
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;

// 1. create reducer import createSlice
// 2. initialState สร้างตัวแปรเริ่มต้น movies[] , object
// 3. createSlice
//  -> 1.name ชื่อของ function , ค่าเริ่มต้นของ state , reducer: เอาไว้จัดการกับ state
