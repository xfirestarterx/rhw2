import React from 'react';
import styles from './Center.styl';
import PropTypes from 'prop-types';

const Center = ({ children }) => <div className={styles.Center}>{children}</div>;

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
};

export default Center;
