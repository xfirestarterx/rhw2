import { SET_MOVIES, SET_IS_LOADING, DELETE_MOVIE, SORT_MOVIES } from 'store/actionTypes';
import sortOrder from 'enums/sortOrder';

const initialState = {
  movies: [],
  isLoading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_MOVIES: {
      return {
        ...state,
        movies:
          action.payload.sortOrder.value === sortOrder.title ?
            [...state.movies.sort((a, b) => a.title.localeCompare(b.title))] :
            [...state.movies.sort((a, b) => b.label.localeCompare(a.label))]
      }
    }

    case SET_MOVIES: {
      return {
        ...state,
        movies: action.payload.movies
      }
    }

    case DELETE_MOVIE: {
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.payload.id)
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
