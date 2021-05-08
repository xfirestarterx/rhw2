import React from 'react';
import MovieHeader from '../components/MovieHeader/MovieHeader';
import pageBottom from './pageBottom';

const MoviePage = () => {
  return (
    <>
      <MovieHeader />
      { pageBottom}
    </>
  );
};

export default MoviePage;
