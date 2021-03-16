import { SET_MOVIES, SET_IS_LOADING } from 'store/actionTypes';

const initialState = {
  movies: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      return {
        ...state,
        movies: action.payload.movies
      }
    }

    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload.isLoading
      }
    }

    default: {
      return state;
    }
  }
}
