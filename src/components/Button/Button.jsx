import React from 'react';
import styles from './Button.styl';
import PropTypes from 'prop-types';

const Button = ({ text = 'Default text', onClick = null, theme = 'Default', propStyles }) => {
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
  theme: PropTypes.oneOf(['Confirm', 'Dismiss', 'Default'])
};

export default Button;
