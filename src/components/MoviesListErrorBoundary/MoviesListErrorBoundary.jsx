import React from 'react';
import styles from './MoviesListErrorBoundary.styl';
import PropTypes from 'prop-types';

const MoviesListErrorBoundary = ({ children, items, isLoading }) => {
  const ErrorMsg = () => <div className={styles.ErrorMsg}>Something went wrong</div>;
  const isError = !isLoading && (!items || !items.length);

  return <>{isError ? <ErrorMsg /> : children}</>;
};

MoviesListErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      label: PropTypes.string,
      subtitle: PropTypes.string,
      img: PropTypes.string.isRequired
    })
  )
}

export default MoviesListErrorBoundary;
