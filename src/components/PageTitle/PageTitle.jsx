import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageTitle.styl';

const PageTitle = ({ text = 'Default text' }) => <h1 className={styles.PageTitle}>{text}</h1>;

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PageTitle;
