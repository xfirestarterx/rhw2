import React from 'react';
import styles from './CardImage.styl';
import PropTypes from 'prop-types';

const CardImage = ({ img }) => {
  return (
    <div className={styles.CardImageWrapper}>
      <img src={img} />
    </div>
  );
};

CardImage.propTypes = {
  img: PropTypes.string.isRequired
};

export default CardImage;
