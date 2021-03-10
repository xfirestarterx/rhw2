import React from 'react';
import styles from './Card.styl';
import PropTypes from 'prop-types';
import CardImage from '../CardImage/CardImage';
import CardFooter from '../CardFooter/CardFooter';

const Card = ({ img, title, subtitle, label, id }) => {
  return (
    <div className={styles.Card}>
      <CardImage img={img} />
      <CardFooter
        title={title}
        subtitle={subtitle}
        label={label}
        id={id} />
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default Card;
