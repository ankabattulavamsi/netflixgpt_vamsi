import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playingNowMoviesList: null,
    moviesTrailer: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.playingNowMoviesList = action.payload;
    },
    movieTrailerPlay: (state, action) => {
      state.moviesTrailer = action.payload;
    },
  },
});

export const { nowPlayingMovies, movieTrailerPlay } = movieSlice.actions;

export default movieSlice.reducer;
