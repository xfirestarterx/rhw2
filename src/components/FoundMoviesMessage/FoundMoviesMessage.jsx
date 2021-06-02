import React from 'react';
import PropTypes from 'prop-types';
import styles from './FoundMoviesMessage.styl';

const FoundMoviesMessage = ({ count, text }) => (
  <div className={styles.FoundMoviesMessage}>
    <strong>{count}</strong>
    {' '}
    {text}
  </div>
);

FoundMoviesMessage.propTypes = {
  count: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FoundMoviesMessage;
