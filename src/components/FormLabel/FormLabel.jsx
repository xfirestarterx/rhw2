import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormLabel.styl';

const FormLabel = ({ attrFor, text }) => <label className={styles.FormLabel} htmlFor={attrFor}>{text}</label>;

FormLabel.propTypes = {
  attrFor: PropTypes.string,
  text: PropTypes.string
}

export default FormLabel;
