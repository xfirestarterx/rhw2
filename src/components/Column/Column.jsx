import React from 'react';
import styles from './Column.styl';
import PropTypes from 'prop-types';

const Column = ({ children }) => {
  return (
    <div className={styles.Column}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.element.isRequired
}

export default Column;
