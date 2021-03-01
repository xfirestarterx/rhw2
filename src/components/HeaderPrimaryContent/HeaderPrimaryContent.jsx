import React from 'react';
import styles from './HeaderPrimaryContent.styl';
import PropTypes from 'prop-types';

const HeaderPrimaryContent = ({children}) => {
    return (
        <div className={styles.HeaderPrimaryContent}>
            { children }
        </div>
    );
};

HeaderPrimaryContent.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
};

export default HeaderPrimaryContent;
