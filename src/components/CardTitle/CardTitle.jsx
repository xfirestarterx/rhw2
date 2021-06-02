import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardTitle.styl';

const CardTitle = ({ text }) => <div className={styles.CardTitle}>{text}</div>;

CardTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardTitle;
