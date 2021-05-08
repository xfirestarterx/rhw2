import { createSelector } from 'reselect';

const getCurrentFilter = (state) => state.movies.params.filter;

export const getActiveFilterTab = createSelector(
  [ getCurrentFilter ],
  (currentFilter) => currentFilter
);

const getCurrentSearchVal = (state) => state.movies.params.search;

export const getCurrentSearchInputVal = createSelector(
  [ getCurrentSearchVal ],
  (currentVal) => currentVal
);

const getCurrentMovie = (state) => state.movies.movieDetails;

export const getMovieHeaderDetailsState = createSelector(
  [ getCurrentMovie, getCurrentSearchVal ],
  ( currentMovie, inputVal ) => ({
    currentMovie,
    inputVal
  })
);