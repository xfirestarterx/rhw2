import { SET_MOVIES, SET_IS_LOADING, DELETE_MOVIE, SORT_MOVIES, FILTER_MOVIES, ADD_MOVIE, EDIT_MOVIE } from 'store/actionTypes';
import sortOrder from 'enums/sortOrder';
import filterTerms from 'enums/filterTerms';
import getRandomNum from 'utils/getRandomNum';

const initialState = {
  movies: [],
  isLoading: false
}

const sortMap = {
  [sortOrder.title]: 'title',
  [sortOrder.year]: 'label',
  [sortOrder.rating]: 'rating'
}

let allMovies = [];

const updateAllMovies = (movies) => {
  allMovies = movies;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MOVIES: {
      return {
        ...state,
        movies:
          action.payload.filterTerm === filterTerms.all ?
            allMovies :
            allMovies.filter(({ subtitle }) => subtitle.includes(action.payload.filterTerm))
      }
    }

    case SORT_MOVIES: {
      const sortBy = action.payload.sortOrder.value;
      const mappedSortBy = sortMap[sortBy];

      return {
        ...state,
        movies: [...state.movies.sort((a, b) => b[mappedSortBy].localeCompare(a[mappedSortBy]))]
      }
    }

    case SET_MOVIES: {
      updateAllMovies(action.payload.movies);

      return {
        ...state,
        movies: action.payload.movies
      }
    }

    case ADD_MOVIE: {
      const movie = action.payload.movie;
      movie[0].id = getRandomNum(10000, 100000);
      updateAllMovies([...movie, ...allMovies]);

      return {
        ...state,
        movies: allMovies
      }
    }

    case EDIT_MOVIE: {

    }

    case DELETE_MOVIE: {
      const movies = state.movies.filter(movie => movie.id !== action.payload.id);
      updateAllMovies(movies);

      return {
        ...state,
        movies
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
