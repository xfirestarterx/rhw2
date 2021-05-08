import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderPrimaryContent.styl';

const HeaderPrimaryContent = ({ children }) => (
  <div className={styles.HeaderPrimaryContent}>
    { children }
  </div>
);

HeaderPrimaryContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default HeaderPrimaryContent;
