import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormRow.styl';

export const flowAxisType = {
  x: 'AxisX',
  y: 'AxisY',
};

const FormRow = ({
  children, maxWidth = 'none', flowAxis = flowAxisType.x, justifyContent = 'Start',
}) => (
  <div className={`${styles.FormRow} ${styles[flowAxis]} ${styles[justifyContent]}`} style={{ maxWidth: `${maxWidth}px` }}>
    {children}
  </div>
);

FormRow.propTypes = {
  children: PropTypes.any,
  maxWidth: PropTypes.string,
  flowAxis: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default FormRow;
