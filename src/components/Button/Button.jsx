import React from 'react';
import styles from './Button.styl';
import PropTypes from 'prop-types';

export const buttonThemes = {
  confirm: 'Confirm',
  dismiss: 'Dismiss',
  default: 'Default'
}

const Button = ({ text = 'Default text', onClick = null, theme = buttonThemes.default, propStyles }) => {
  return (
    <button
      className={`${styles.Button} ${styles[theme] ? styles[theme] : ''}`}
      onClick={onClick}
      style={propStyles}
    >{text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf([buttonThemes.confirm, buttonThemes.dismiss, buttonThemes.default])
};

export default Button;
