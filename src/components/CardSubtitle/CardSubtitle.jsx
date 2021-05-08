import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardSubtitle.styl';

const CardSubtitle = ({ text }) => <div className={styles.CardSubtitle}>{text}</div>;

CardSubtitle.propTypes = {
  text: PropTypes.string,
};

export default CardSubtitle;
