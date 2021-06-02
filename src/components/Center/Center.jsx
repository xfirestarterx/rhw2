import React from 'react';
import PropTypes from 'prop-types';
import styles from './Center.styl';

const Center = ({ children }) => <div className={styles.Center}>{children}</div>;

Center.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default Center;
