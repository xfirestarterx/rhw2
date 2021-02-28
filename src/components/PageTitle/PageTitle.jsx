import React from 'react';
import styles from './PageTitle.styl';
import PropTypes from 'prop-types';

const PageTitle = ({ text = 'Default text' }) => <h1 className={styles.PageTitle}>{text}</h1>;

PageTitle.propTypes = {
    text: PropTypes.string.isRequired
};

export default PageTitle;
