import React from 'react';
import styles from './Column.styl';

const Column = ({ alignRight = false, children }) => {
  return (
    <div className={`${styles.Column} ${alignRight ? styles.AlignRight : ''}`}>
      {children}
    </div>
  );
};

export default Column;
