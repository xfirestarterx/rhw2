import React from 'react';
import MovieHeader from '../components/MovieHeader/MovieHeader';
import pageBottom from './pageBottom';
import { setMovieDetailsThunk } from '../store/actions';

const MoviePage = () => {
  return (
    <>
      <MovieHeader />
      { pageBottom}
    </>
  );
};

MoviePage.serverFetch = setMovieDetailsThunk;

export default MoviePage;
