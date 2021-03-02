import React from 'react';
import PropTypes from 'prop-types';
import styles from './TabItem.styl';

const TabItem = ({ title, isActive = false }) => <div className={`${styles.TabItem} ${isActive ? styles.TabItemActive : ''}`}>{title}</div>;

TabItem.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool
};

export default TabItem;
