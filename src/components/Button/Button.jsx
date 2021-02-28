import React from 'react';
import styles from './Button.styl';
import PropTypes from 'prop-types';

const Button = ({ text = 'Default text', onClick = null }) => {
    return <button className={styles.Button} onClick={onClick}>{text}</button>;
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
