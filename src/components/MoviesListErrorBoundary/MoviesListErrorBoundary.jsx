import React from 'react';
import styles from './MoviesListErrorBoundary.styl';
import PropTypes from 'prop-types';

const MoviesListErrorBoundary = ({ children, items }) => {
  const ErrorMsg = () => <div className={styles.ErrorMsg}>Something went wrong</div>;
  const isError = !items || !items.length;

  return <>{isError ? <ErrorMsg /> : children}</>;
};

MoviesListErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
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
