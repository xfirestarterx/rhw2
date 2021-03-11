import React, { useContext } from 'react';
import styles from './MovieHeader.styl';
import { useParams } from 'react-router';
import MainContext from '../MainContext/MainContext';
import Row from '../Row/Row';
import Column from '../Column/Column';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import { Link } from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';
import bgImg from '../../img/header-bg';

const MovieHeader = () => {
  const params = useParams();
  const id = Number(params?.id);
  const { moviesList } = useContext(MainContext);
  const currentMovie = moviesList.filter(item => item.id === id)[0];

  return (
    <div className={styles.MovieHeader}>
      <img src={bgImg} className={styles.BgImg} />
      <div className={styles.Wrap}>
        <Row className={styles.Top}>
          <Column>
            <Link to='/'><Logo /></Link>
          </Column>
          <Column isRightAligned={true}>
            <TextField placeholder='search' />
          </Column>
        </Row>

        <MovieDetails movie={currentMovie} />
      </div>
    </div>
  );
};

export default MovieHeader;
