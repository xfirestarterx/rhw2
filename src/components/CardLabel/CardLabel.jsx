import React from 'react';
import styles from './CardLabel.styl';
import PropTypes from 'prop-types';

const CardLabel = ({ text }) => <div className={styles.CardLabel}>{text}</div>;

CardLabel.propTypes = {
  text: PropTypes.string.isRequired
};

export default CardLabel;
