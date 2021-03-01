import React from 'react';
import styles from './CardTitle.styl';
import PropTypes from 'prop-types';

const CardTitle = ({ text }) => <div className={styles.CardTitle}>{text}</div>;

CardTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default CardTitle;
