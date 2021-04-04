import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorMsg.styl';

const ErrorMsg = ({msg}) => !msg ? null : <div className={styles.ErrorMsg}>{msg}</div>;

ErrorMsg.propTypes = {
  msg: PropTypes.string
}

export default ErrorMsg;
