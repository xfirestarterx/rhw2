import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieDetails.styl';
import Row from '../Row/Row';
import Column from '../Column/Column';

const MovieDetails = ({ movie }) => {
  return !movie ?
    null :
    <>
      <Row className={`${styles.Content} ${styles.Wrap}`}>
        <Column><img src={movie.img} /></Column>
        <Column>
          <div className={styles.Title}>{movie.title}</div>
          <div className={styles.Subtitle}>{movie.subtitle}</div>
          <div className={styles.Year}>{movie.label}</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sunt provident ex a esse cupiditate tempora quasi quia, velit nulla odio voluptatem cumque dicta vitae eaque nesciunt itaque architecto iure!</div>
        </Column>
      </Row>
    </>;
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    img: PropTypes.string,
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    label: PropTypes.string
  })
}

export default MovieDetails;
