import React from 'react';
import styles from './FormRow.styl';
import PropTypes from 'prop-types';

export const flowAxisType = {
  x: 'AxisX',
  y: 'AxisY'
}

const FormRow = ({ children, maxWidth='none', flowAxis = flowAxisType.x, justifyContent = 'Start' }) => {
  return (
    <div className={`${styles.FormRow} ${styles[flowAxis]} ${styles[justifyContent]}`} style={{maxWidth: `${maxWidth}px`}}>
      {children}
    </div>
  );
};

FormRow.propTypes = {
  children: PropTypes.any,
  maxWidth: PropTypes.string,
  flowAxis: PropTypes.string,
  justifyContent: PropTypes.string
};

export default FormRow;
