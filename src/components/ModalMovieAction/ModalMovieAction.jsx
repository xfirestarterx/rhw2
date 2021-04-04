import React from 'react';
import { connect } from 'react-redux';
import { addMovieThunk, editMovieThunk, closeModal } from 'store/actions';
import FormLabel from '../FormLabel/FormLabel';
import FormRow, { flowAxisType } from '../FormRow/FormRow';
import Modal, { modalType } from '../Modal/Modal';
import TextField from '../TextField/TextField';
import GenericInput from '../GenericInput/GenericInput';
import Button, { buttonThemes } from '../Button/Button';
import { Formik, Form, useFormik, Field } from 'formik';

import prepareDataToSend from 'utils/prepareDataToSend';
import prepareDataToEdit from 'utils/prepareDataToEdit';
import genres from 'data/genres';

const getInputId = (name) => `modal-input-${name}`;

const inputs = {
  title: getInputId('title'),
  release_date: getInputId('date'),
  poster_path: getInputId('img'),
  runtime: getInputId('runtime')
}

const initialStateAdd = {
  title: '',
  poster_path: 'https://via.placeholder.com/440x550.png?text=Pulp+Fiction',
  runtime: '',
  genres: [],
  release_date: ''
}

const ModalMovieAction = ({
  movies,
  currentModal,
  addMovieThunk,
  editMovieThunk,
  closeModal,
  movieId
}) => {
  const movieToEdit = movieId ? movies.filter(movie => movie.id === movieId)[0] : null;
  const initialState = movieToEdit ? prepareDataToEdit(movieToEdit) : initialStateAdd;

  const confirmHandler = (movie) => {
    currentModal === modalType.add ?
      addMovieThunk(prepareDataToSend(movie)) :
      editMovieThunk(prepareDataToSend(movie));

    closeModal();
  };

  const formik = useFormik({
    initialValues: initialState,
    onSubmit: (movie) => {
      confirmHandler(movie);
    }
  });

  let modalTitle;
  let movieIdRow;
  let genresProps;

  if (currentModal === modalType.add) {
    modalTitle = 'Add movie';
  } else {
    modalTitle = 'Edit movie';

    movieIdRow = (
      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel text='movie id' />
        <p style={{ margin: 0 }}>{initialState.id}</p>
      </FormRow>
    );

    genresProps = formik.getFieldProps('genres');
  }

  return (
    <Modal title={modalTitle}>
      { (currentModal === modalType.edit) && movieIdRow}

      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <FormRow flowAxis={flowAxisType.y}>
            <FormLabel attrFor={inputs.title} text='title' />
            <TextField fieldProps={formik.getFieldProps('title')} id={inputs.title} placeholder='Add title' />
          </FormRow>

          <FormRow flowAxis={flowAxisType.y}>
            <FormLabel attrFor={inputs.release_date} text='release date' />
            <GenericInput fieldProps={formik.getFieldProps('release_date')} type='date' id={inputs.date} />
          </FormRow>

          <FormRow flowAxis={flowAxisType.y}>
            <FormLabel attrFor={inputs.poster_path} text='poster path' />
            <TextField fieldProps={formik.getFieldProps('poster_path')} id={inputs.poster_path} placeholder='Poster path here' />
          </FormRow>

          <FormRow flowAxis={flowAxisType.y}>
            <FormLabel text='genre' />
            <Field multiple={true} as='select' name='genres' {...formik.getFieldProps('genres')} >
              {genres.map(({ value, label }, i) => <option value={value} key={i}>{label}</option>)}
            </Field>
          </FormRow>

          <FormRow flowAxis={flowAxisType.y}>
            <FormLabel attrFor={inputs.runtime} text='runtime' />
            <TextField fieldProps={formik.getFieldProps('runtime')} id={inputs.runtime} placeholder='Runtime here' mapToStateName='runtime' />
          </FormRow>

          <FormRow justifyContent='End'>
            <Button onClick={formik.resetForm} type='reset' theme={buttonThemes.dismiss} text='reset' propStyles={{ maxWidth: '100px' }} />
            <Button type='submit' theme={buttonThemes.confirm} text='submit' propStyles={{ maxWidth: '100px', marginLeft: '20px' }} />
          </FormRow>
        </Form>
      </Formik>
    </Modal>
  );
};

const mapStateToProps = ({ movies }) => movies;

export default connect(mapStateToProps, { addMovieThunk, editMovieThunk, closeModal })(ModalMovieAction);
