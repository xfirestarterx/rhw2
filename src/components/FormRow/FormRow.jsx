import React from 'react';
import styles from './FormRow.styl';
import PropTypes from 'prop-types';

const FormRow = ({ children, maxWidth='none' }) => {
  return (
    <div className={styles.FormRow} style={{maxWidth: `${maxWidth}px`}}>
      {children}
    </div>
  );
};

FormRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  maxWidth: PropTypes.string
};

export default FormRow;
