import React from 'react';
import { connect } from 'react-redux';
import styles from './MovieHeader.styl';
import { useParams } from 'react-router';
import Row from '../Row/Row';
import Column from '../Column/Column';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import { Link } from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';
import bgImg from '../../img/header-bg';

const MovieHeader = ({ movies }) => {
  const params = useParams();
  const id = Number(params?.id);
  const currentMovie = movies.filter(item => item.id === id)[0];

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
        { currentMovie ? <MovieDetails movie={currentMovie} /> : <p className={styles.Loading}>loading...</p> }
      </div>
    </div>
  );
};

const mapStateToProps = ({ movies }) => movies;

export default connect(mapStateToProps)(MovieHeader);
