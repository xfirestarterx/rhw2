import React from 'react';
import styles from './Card.styl';
import PropTypes from 'prop-types';
import CardImage from '../CardImage/CardImage';
import CardFooter from '../CardFooter/CardFooter';
import { Link } from 'react-router-dom';

const Card = ({ img, title, subtitle, label, id }) => {
  return (
    <div className={styles.Card}>
      <Link to={`/movie/${id}`}>
        <CardImage img={img} />
      </Link>
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
};

export default Card;
