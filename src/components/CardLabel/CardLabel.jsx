import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardLabel.styl';

const CardLabel = ({ text }) => <div className={styles.CardLabel}>{text}</div>;

CardLabel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CardLabel;
