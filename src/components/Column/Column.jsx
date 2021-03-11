import React from 'react';
import styles from './Column.styl';
import PropTypes from 'prop-types';

const Column = ({ children, isRightAligned = false }) => {
  return (
    <div className={`${styles.Column} ${isRightAligned ? styles.AlignRight : ''}`}>
      {children}
    </div>
  );
};

Column.propTypes = {
  isRightAligned: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default Column;
