import React from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesListErrorBoundary.styl';

const MoviesListErrorBoundary = ({ children, items, isLoading }) => {
  const ErrorMsg = () => <div className={styles.ErrorMsg}>Nothing found</div>;
  const isError = !isLoading && (!items || !items.length);

  return <>{isError ? <ErrorMsg /> : children}</>;
};

MoviesListErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      label: PropTypes.string,
      subtitle: PropTypes.string,
      img: PropTypes.string.isRequired,
    }),
  ),
};

export default MoviesListErrorBoundary;
