import React from 'react';
import styles from './Row.styl';
import PropTypes from 'prop-types';

const Row = ({children}) => {

    return (
        <div className={styles.Row}>
            {children}
        </div>
    );
};

Row.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default Row;
