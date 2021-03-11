import React from 'react';
import styles from './TextField.styl';
import PropTypes from 'prop-types';

const noop = () => {};

const TextField = ({ placeholder, id, val = null }) => {
    return <input {...val} onChange={noop} id={id} className={styles.TextField} type='text' placeholder={placeholder} />;
}

TextField.propTypes = {
    placeholder: PropTypes.string,
    id: PropTypes.string
};

export default TextField;
