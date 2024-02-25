import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    playingNowMoviesList: null,
    moviesTrailer: null,
    popularMovies: null,
    topMovies: null,
    NewMovies: null,
    movieDetails: null,
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
    detailsOfMovie: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const {
  nowPlayingMovies,
  movieTrailerPlay,
  addPopularMovies,
  topRatedMovies,
  upComingMovies,
  detailsOfMovie,
} = movieSlice.actions;

export default movieSlice.reducer;
