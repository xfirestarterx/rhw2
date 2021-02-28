import React from 'react';
import styles from './Button.styl';
import PropTypes from 'prop-types';

const Button = ({ text = 'Default text', onClick = null, style = 'Default' }) => {
    const theme = styles[style];

    return <button className={`${styles.Button} ${theme ? theme : ''}`} onClick={onClick}>{text}</button>;
};

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.oneOf(['Accent', 'Default'])
};

export default Button;
