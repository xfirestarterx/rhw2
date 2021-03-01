import React from 'react';
import styles from './CardSubtitle.styl';
import PropTypes from 'prop-types';

const CardSubtitle = ({ text }) => <div className={styles.CardSubtitle}>{text}</div>;

CardSubtitle.propTypes = {
  text: PropTypes.string
};

export default CardSubtitle;
