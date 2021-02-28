import React from 'react';
import styles from './Button.styl';

const Button = ({ text = 'Default text', onClick = null }) => {
    return <button className={styles.Button} onClick={onClick}>{text}</button>;
};

export default Button;
