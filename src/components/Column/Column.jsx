import React from 'react';
import styles from './Column.styl';
import PropTypes from 'prop-types';

const Column = ({ alignRight = false, children }) => {
  return (
    <div className={`${styles.Column} ${alignRight ? styles.AlignRight : ''}`}>
      {children}
    </div>
  );
};

Column.PropTypes = {
  alignRight: PropTypes.bool,
  children: PropTypes.element.isRequired
}

export default Column;
