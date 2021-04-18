import React from 'react';
import { connect } from 'react-redux';
import styles from './MainContent.styl';
import CardsList from '../CardsList/CardsList';
import FoundMoviesMessage from '../FoundMoviesMessage/FoundMoviesMessage';
import MoviesListErrorBoundary from '../MoviesListErrorBoundary/MoviesListErrorBoundary';
import MainContentTop from '../MainContentTop/MainContentTop';

const MainContent = ({ movies, isLoading }) => {
  const count = 0;

  return (
    <div className={styles.MainContent}>
      <MainContentTop />

      { Boolean(count) && <FoundMoviesMessage count={count} text='movies found' /> }

      { isLoading && <p>Loading...</p> }
      <CardsList defaultMessage="No movie found" items={movies} />
    </div>
  );
};

const mapStateToProps = ({ movies }) => movies;

export default connect(mapStateToProps)(MainContent);
