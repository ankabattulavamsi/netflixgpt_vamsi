import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playingNowMoviesList: null,
    moviesTrailer: null,
    popularMovies: null,
    topMovies: null,
    NewMovies: null,
  },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.playingNowMoviesList = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    topRatedMovies: (state, action) => {
      state.topMovies = action.payload;
    },
    upComingMovies: (state, action) => {
      state.NewMovies = action.payload;
    },
    movieTrailerPlay: (state, action) => {
      state.moviesTrailer = action.payload;
    },
  },
});

export const {
  nowPlayingMovies,
  movieTrailerPlay,
  addPopularMovies,
  topRatedMovies,
  upComingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
