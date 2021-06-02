import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import styles from './MovieHeader.styl';
import { setMovieDetailsThunk, setMoviesByTerms } from '../../store/actions';
import Row from '../Row/Row';
import Column from '../Column/Column';
import Logo from '../Logo/Logo';
import TextField from '../TextField/TextField';
import MovieDetails from '../MovieDetails/MovieDetails';
import bgImg from '../../img/header-bg';
import { getMovieHeaderDetailsState } from '../../selectors/index';

const MovieHeader = ({
  currentMovie, setMovieDetailsThunk, setMoviesByTerms, inputVal,
}) => {
  const params = useParams();
  const id = Number(params?.id);

  useEffect(() => {
    if (!currentMovie) {
      setMovieDetailsThunk(id);
    }
  }, []);

  const formik = useFormik({
    initialValues: { inputSearch: '' },
    validationSchema: Yup.object({
      inputSearch: Yup.string().required('Required'),
    }),
    onSubmit: ({ inputSearch }) => {
      setMoviesByTerms({ search: inputSearch });
    },
  });

  useEffect(() => {
    formik.setFieldValue('inputSearch', inputVal);
  }, [inputVal]);

  return (
    <div className={styles.MovieHeader}>
      <img src={bgImg} className={styles.BgImg} />
      <div className={styles.Wrap}>
        <Row className={styles.Top}>
          <Column>
            <Link to="/"><Logo /></Link>
          </Column>
          <Column isRightAligned>
            <Formik>
              <Form onSubmit={formik.handleSubmit}>
                <TextField fieldProps={formik.getFieldProps('inputSearch')} id="inputSearch" placeholder="search" />
              </Form>
            </Formik>
          </Column>
        </Row>
        { currentMovie ? <MovieDetails movie={currentMovie} /> : <p className={styles.Loading}>loading...</p> }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => getMovieHeaderDetailsState(state);

export default connect(mapStateToProps, { setMovieDetailsThunk, setMoviesByTerms })(MovieHeader);
