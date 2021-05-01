import React from 'react';
import Header from '../components/Header/Header';
import pageBottom from './pageBottom';
import { setMoviesByTerms } from '../store/actions';

const HomePage = () => {
  return (
    <>
      <Header />
      { pageBottom}
    </>
  );
};

HomePage.serverFetch = setMoviesByTerms;

export default HomePage;
