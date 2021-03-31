import React from 'react';
import { connect } from 'react-redux';
import styles from './MainContent.styl';
import CardsList from '../CardsList/CardsList';
import FoundMoviesMessage from '../FoundMoviesMessage/FoundMoviesMessage';
import MoviesListErrorBoundary from '../MoviesListErrorBoundary/MoviesListErrorBoundary';
import MainContentTop from '../MainContentTop/MainContentTop';

const MainContent = ({ movies, isLoading }) => {
  return (
    <div className={styles.MainContent}>
      <MainContentTop />

      <FoundMoviesMessage count={39} text='movies found' />

      { isLoading && <p>Loading...</p> }

      <MoviesListErrorBoundary isLoading={isLoading} items={movies}>
        <CardsList items={movies} />
      </MoviesListErrorBoundary>
    </div>
  );
};

const mapStateToProps = ({ movies }) => movies;

export default connect(mapStateToProps)(MainContent);
