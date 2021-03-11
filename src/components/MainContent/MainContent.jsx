import React from 'react';
import styles from './MainContent.styl';
import CardsList from '../CardsList/CardsList';
import FoundMoviesMessage from '../FoundMoviesMessage/FoundMoviesMessage';
import MoviesListErrorBoundary from '../MoviesListErrorBoundary/MoviesListErrorBoundary';
import MainContentTop from '../MainContentTop/MainContentTop';
import { MainContext } from '../MainContextProvider/MainContextProvider';

const MainContent = () => {
  return (
    <div className={styles.MainContent}>
      <MainContentTop />

      <FoundMoviesMessage count={39} text='movies found' />

      <MainContext.Consumer>
        {({ isLoading, moviesList }) => {
          return (
            <>
              { isLoading && <p>Loading...</p> }

              <MoviesListErrorBoundary isLoading={isLoading} items={moviesList}>
                <CardsList items={moviesList} />
              </MoviesListErrorBoundary>
            </>
          )
        }}
      </MainContext.Consumer>
    </div>
  );
};

export default MainContent;
