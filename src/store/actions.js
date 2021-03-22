import * as actionTypes from './actionTypes';
import * as moviesSvc from 'utils/moviesSvc';
import normalizeMoviesData from 'utils/normalizeMoviesData';

export const openModal = (modalType) => ({
  type: actionTypes.OPEN_MODAL,
  payload: {
    currentModal: modalType
  }
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL
});

export const setMovies = (movies) => ({
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

export const setIsLoading = (isLoading) => ({
  type: actionTypes.SET_IS_LOADING,
  payload: {
    isLoading
  }
});
