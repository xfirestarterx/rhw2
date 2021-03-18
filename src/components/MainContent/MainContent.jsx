import React, { useContext } from 'react';
import styles from './MainContent.styl';
import CardsList from '../CardsList/CardsList';
import FoundMoviesMessage from '../FoundMoviesMessage/FoundMoviesMessage';
import MoviesListErrorBoundary from '../MoviesListErrorBoundary/MoviesListErrorBoundary';
import MainContentTop from '../MainContentTop/MainContentTop';
import MainContext from '../MainContext/MainContext';

const MainContent = () => {
  const { isLoading, moviesList } = useContext(MainContext);

  return (
    <div className={styles.MainContent}>
      <MainContentTop />

      <FoundMoviesMessage count={39} text='movies found' />

      { isLoading && <p>Loading...</p> }

      <MoviesListErrorBoundary isLoading={isLoading} items={moviesList}>
        <CardsList items={moviesList} />
      </MoviesListErrorBoundary>
    </div>
  );
};

export default MainContent;
