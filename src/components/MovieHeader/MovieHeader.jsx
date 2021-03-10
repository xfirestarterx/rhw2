import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieHeader.styl';
import { useParams } from 'react-router';
import MainContext from '../MainContext/MainContext';

const MovieHeader = () => {
  const params = useParams();
  const id = Number(params?.id);
  const { moviesList } = useContext(MainContext);
  const [currentMovie, setCurrentMovie] = useState(undefined);

  useEffect(() => {
    setCurrentMovie(moviesList.filter(item => item.id === id)[0]);
  }, [moviesList, currentMovie, id]);

  return (
    <div className={styles.MovieHeader}>
      {
        currentMovie ?
          <img src={currentMovie.img} />
          :
          <p>Loading</p>
      }
    </div>
  );
};

MovieHeader.propTypes = {}

export default MovieHeader;
