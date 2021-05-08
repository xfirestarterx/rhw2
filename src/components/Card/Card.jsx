import React from 'react';
import { connect } from 'react-redux';
import styles from './Card.styl';
import PropTypes from 'prop-types';
import { setMovieDetailsThunk } from '../../store/actions';
import CardImage from '../CardImage/CardImage';
import CardFooter from '../CardFooter/CardFooter';
import { Link } from 'react-router-dom';

const Card = ({ img, title, subtitle, label, id, rating, setMovieDetailsThunk }) => {
  const handleClick = () => {
    setMovieDetailsThunk(id);
  }

  return (
    <div className={styles.Card}>
      <Link onClick={handleClick} to={`/movie/${id}`}>
        <CardImage img={img} />
      </Link>
      <CardFooter
        title={title}
        subtitle={subtitle}
        label={label}
        id={id}
        rating={rating} />
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  rating: PropTypes.string
};

export default connect(null, { setMovieDetailsThunk })(Card);
