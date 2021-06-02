import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardImage.styl';

const CardImage = ({ img }) => (
  <div className={styles.CardImageWrapper}>
    <img src={img} />
  </div>
);

CardImage.propTypes = {
  img: PropTypes.string.isRequired,
};

export default CardImage;
