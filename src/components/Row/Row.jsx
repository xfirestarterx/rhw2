import React from 'react';
import styles from './Row.styl';
import PropTypes from 'prop-types';

const Row = ({children, className = ''}) => {
    return (
        <div className={`${className} ${styles.Row}`}>
            {children}
        </div>
    );
};

Row.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default Row;
