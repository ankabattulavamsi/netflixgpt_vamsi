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
    searchMovieResult: null,
    topMoviesTrailerAndDetails: null,
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
    searchResultMovies: (state, action) => {
      state.searchMovieResult = action.payload;
    },
    topMoviesDetails: (state, action) => {
      state.topMoviesTrailerAndDetails = action.payload;
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
  searchResultMovies,
  topMoviesDetails,
} = movieSlice.actions;

export default movieSlice.reducer;
