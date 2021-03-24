import { SET_MOVIES, SET_IS_LOADING, DELETE_MOVIE, SORT_MOVIES } from 'store/actionTypes';
import sortOrder from 'enums/sortOrder';

const initialState = {
  movies: [],
  isLoading: false
}

const sortMap = {
  [sortOrder.title]: 'title',
  [sortOrder.year]: 'label',
  [sortOrder.rating]: 'rating'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SORT_MOVIES: {
      const sortBy = action.payload.sortOrder.value;
      const mappedSortBy = sortMap[sortBy];

      return {
        ...state,
        movies: [...state.movies.sort((a, b) => b[mappedSortBy].localeCompare(a[mappedSortBy]))]
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
