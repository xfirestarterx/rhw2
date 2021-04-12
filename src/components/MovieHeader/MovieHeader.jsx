import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styles from './MovieHeader.styl';
import { useParams } from 'react-router';
import { setMovieDetailsThunk } from 'store/actions';
import Row from '../Row/Row';
import Column from '../Column/Column';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import { Link } from 'react-router-dom';
import MovieDetails from '../MovieDetails/MovieDetails';
import bgImg from '../../img/header-bg';

const MovieHeader = ({ currentMovie, setMovieDetailsThunk }) => {
  const params = useParams();
  const id = Number(params?.id);

  useEffect(() => {
    setMovieDetailsThunk(id);
  }, []);

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

const mapStateToProps = ({ movies }) => ({ currentMovie: movies.movieDetails });

export default connect(mapStateToProps, { setMovieDetailsThunk })(MovieHeader);
