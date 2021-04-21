import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMsg.styl';

const ErrorMsg = ({msg, dataTestId = ''}) => !msg ? null : <div data-testid={dataTestId} className={styles.ErrorMsg}>{msg}</div>;

ErrorMsg.propTypes = {
  dataTestId: PropTypes.string,
  msg: PropTypes.string
}

export default ErrorMsg;
