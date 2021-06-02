import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.styl';

export const buttonThemes = {
  confirm: 'Confirm',
  dismiss: 'Dismiss',
  default: 'Default',
};

const Button = ({
  text = 'Default text', type = 'button', onClick = null, theme = buttonThemes.default, propStyles,
}) => (
  <button
    type={type}
    className={`${styles.Button} ${styles[theme] ? styles[theme] : ''}`}
    onClick={onClick}
    style={propStyles}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf([buttonThemes.confirm, buttonThemes.dismiss, buttonThemes.default]),
};

export default Button;
