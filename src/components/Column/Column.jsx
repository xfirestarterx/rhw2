import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.styl';

const Column = ({ children, isRightAligned = false }) => (
  <div className={`${styles.Column} ${isRightAligned ? styles.AlignRight : ''}`}>
    {children}
  </div>
);

Column.propTypes = {
  isRightAligned: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default Column;
