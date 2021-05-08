import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.styl';

const Row = ({ children, className = '' }) => (
  <div className={`${className} ${styles.Row}`}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default Row;
