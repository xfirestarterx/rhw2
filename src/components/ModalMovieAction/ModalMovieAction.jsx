import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovieThunk, editMovieThunk, closeModal } from 'store/actions';
import FormLabel from '../FormLabel/FormLabel';
import FormRow, { flowAxisType } from '../FormRow/FormRow';
import Modal, { modalType } from '../Modal/Modal';
import TextField from '../TextField/TextField';
import GenericInput from '../GenericInput/GenericInput';
import Button, { buttonThemes } from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

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
  const determineInitialState = () => movieToEdit ? prepareDataToEdit(movieToEdit) : initialStateAdd;
  const [state, setState] = useState(determineInitialState());
  const reset = () => setState(determineInitialState());
  const onInputChange = (val, e, inputName) => {
    setState({
      ...state,
      [inputName]: val
    });
  }

  let modalTitle;
  let confirmHandler;
  let movieIdRow;

  if (currentModal === modalType.add) {
    modalTitle = 'Add movie';

    confirmHandler = (movie) => {
      addMovieThunk(prepareDataToSend(movie));
      closeModal();
    }
  } else {
    modalTitle = 'Edit movie';

    confirmHandler = (movie) => {
      editMovieThunk(prepareDataToSend(movie));
      closeModal();
    };

    movieIdRow = (
      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel text='movie id' />
        <p style={{ margin: 0 }}>{state.id}</p>
      </FormRow>
    );
  }

  return (
    <Modal title={modalTitle}>
      { (currentModal === modalType.edit) && movieIdRow}

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.title} text='title' />
        <TextField val={state.title} onChange={onInputChange} id={inputs.title} placeholder='Add title' mapToStateName='title' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.release_date} text='release date' />
        <GenericInput val={state.release_date} onChange={onInputChange} type='date' id={inputs.date} mapToStateName='release_date' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.poster_path} text='poster path' />
        <TextField val={state.poster_path} onChange={onInputChange} id={inputs.poster_path} placeholder='Poster path here' mapToStateName='poster_path' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel text='genre' />
        <Dropdown settings={{ optionsList: genres, width: '100%', isMulti: true, onChange: onInputChange, mapToStateName: 'genres', value: state.genres }} />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.runtime} text='runtime' />
        <TextField val={state.runtime} onChange={onInputChange} id={inputs.runtime} placeholder='Runtime here' mapToStateName='runtime' />
      </FormRow>

      <FormRow justifyContent='End'>
        <Button onClick={reset} theme={buttonThemes.dismiss} text='reset' propStyles={{ maxWidth: '100px' }} />
        <Button onClick={() => confirmHandler(state)} theme={buttonThemes.confirm} text='submit' propStyles={{ maxWidth: '100px', marginLeft: '20px' }} />
      </FormRow>
    </Modal>
  );
};

const mapStateToProps = ({ movies }) => movies;

export default connect(mapStateToProps, { addMovieThunk, editMovieThunk, closeModal })(ModalMovieAction);
