import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieTitle: null,
    moviesResult: null,
    showModal: false,
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
    toggleShowModal: (state) => {
      state.showModal = !state.showModal;
    },
  },
});

export const { toggleGptSearchPage, getMoviesResult, toggleShowModal } =
  gptSlice.actions;

export default gptSlice.reducer;
