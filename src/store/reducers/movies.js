import * as actions from '../actionTypes';
import getRandomNum from '../../utils/getRandomNum';

const initialState = {
  movies: [],
  isLoading: false,
  movieDetails: undefined,
  params: {
    sortOrder: 'asc',
    sortBy: 'title',
    searchBy: 'title',
    filter: '',
    search: '',
  }
}

let allMovies = [];

const updateAllMovies = (movies) => {
  allMovies = movies;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_MOVIE_DETAILS: {
      return {
        ...state,
        movieDetails: action.payload[0]
      }
    }

    case actions.UPDATE_REQUEST_PARAMS: {
      return {
        ...state,
        params: {
          ...state.params,
          sortBy: action.payload.sortBy ?? state.params.sortBy,
          filter: action.payload.filter ?? state.params.filter,
          search: action.payload.search ?? state.params.search,
        }
      }
    }

    case actions.SET_MOVIES: {
      updateAllMovies(action.payload.movies);

      return {
        ...state,
        movies: action.payload.movies
      }
    }

    case actions.ADD_MOVIE: {
      const movie = action.payload.movie;
      movie[0].id = getRandomNum(10000, 100000);
      updateAllMovies([...movie, ...allMovies]);

      return {
        ...state,
        movies: allMovies
      }
    }

    case actions.EDIT_MOVIE: {
      const movie = action.payload.movie[0];
      const filteredMovies = state.movies.filter(mov => mov.id !== movie.id);
      filteredMovies.unshift(movie);

      return {
        ...state,
        movies: filteredMovies
      };
    }

    case actions.DELETE_MOVIE: {
      const movies = state.movies.filter(movie => movie.id !== action.payload.id);
      updateAllMovies(movies);

      return {
        ...state,
        movies
      }
    }

    case actions.SET_IS_LOADING: {
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
