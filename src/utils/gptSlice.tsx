import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieTitle: null,
    moviesResult: null,
  },
  reducers: {
    toggleGptSearchPage: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    getMoviesResult: (state, action) => {
      const { movieTitle, moviesResult } = action.payload;
      state.movieTitle = movieTitle;
      state.moviesResult = moviesResult;
    },
  },
});

export const { toggleGptSearchPage, getMoviesResult } = gptSlice.actions;

export default gptSlice.reducer;
