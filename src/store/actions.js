import * as actionTypes from './actionTypes';
import * as moviesSvc from 'utils/moviesSvc';
import normalizeMoviesData from 'utils/normalizeMoviesData';

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

export const setMoviesThunk = () => {
  return async (dispatch) => {
    const movies = await moviesSvc.getAll();
    dispatch(setMovies(normalizeMoviesData(movies)));
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
