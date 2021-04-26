import * as actionTypes from './actionTypes';
import * as moviesSvc from '../utils/moviesSvc';
import normalizeMoviesData from '../utils/normalizeMoviesData';
import setQueryParams from '../utils/setQueryParams';
import store from './store';

export const openModal = (modalType, movieId) => ({
  type: actionTypes.OPEN_MODAL,
  payload: {
    currentModal: modalType,
    movieId
  }
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL
});

const setMovies = (movies) => ({
  type: actionTypes.SET_MOVIES,
  payload: {
    movies
  }
});

const updateRequestState = (terms) => ({
  type: actionTypes.UPDATE_REQUEST_PARAMS,
  payload: terms
});

export const setMoviesByTerms = (terms) => {
  const requestParamsState = store.getState().movies.params;
  const joinedTerms = {
    ...requestParamsState,
    ...terms
  }
  
  return async (dispatch) => {
    dispatch(updateRequestState(terms));
    if (!joinedTerms.search) return;

    setQueryParams(joinedTerms);

    dispatch(setIsLoading(true));

    const movies = await moviesSvc.getByTerms(joinedTerms);
    dispatch(setMovies(normalizeMoviesData(movies)));

    dispatch(setIsLoading(false));
  }
}

const setMovieDetails = (movie) => ({
  type: actionTypes.GET_MOVIE_DETAILS,
  payload: movie
});

export const setMovieDetailsThunk = (id) => {
  return async (dispatch) => {
    const movie = await moviesSvc.get(id);
    dispatch(setMovieDetails(normalizeMoviesData([movie])));
  }
}

const addMovie = movie => ({
  type: actionTypes.ADD_MOVIE,
  payload: {
    movie
  }
});

export const addMovieThunk = movie => {
  return async (dispatch) => {
    await moviesSvc.add(movie);
    dispatch(addMovie(normalizeMoviesData([movie])));
  }
}

const editMovie = movie => ({
  type: actionTypes.EDIT_MOVIE,
  payload: {
    movie
  }
});

export const editMovieThunk = movie => {
  return async (dispatch) => {
    await moviesSvc.update(movie);
    dispatch(editMovie(normalizeMoviesData([movie])));
  }
}

const deleteMovie = id => ({
  type: actionTypes.DELETE_MOVIE,
  payload: {
    id
  }
});

export const deleteMovieThunk = id => {
  return async (dispatch) => {
    await moviesSvc.remove(id);
    dispatch(deleteMovie(id));
  }
}

export const setIsLoading = (isLoading) => ({
  type: actionTypes.SET_IS_LOADING,
  payload: {
    isLoading
  }
});
