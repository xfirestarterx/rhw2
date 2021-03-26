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
import filterTerms from 'enums/filterTerms';

const getInputId = (name) => `modal-input-${name}`;

const genres = [
  {
    value: '',
    label: 'Select genre'
  },
  {
    value: filterTerms.action,
    label: 'Action'
  },
  {
    value: filterTerms.adventure,
    label: 'Adventure'
  },
  {
    value: filterTerms.comedy,
    label: 'Comedy'
  },
  {
    value: filterTerms.drama,
    label: 'Drama'
  },
  {
    value: filterTerms.fantasy,
    label: 'Fantasy'
  },
  {
    value: filterTerms.romance,
    label: 'Romance'
  },
  {
    value: filterTerms.thriller,
    label: 'Thriller'
  },
  {
    value: filterTerms.war,
    label: 'War'
  }
];

const inputs = {
  title: getInputId('title'),
  release_date: getInputId('date'),
  poster_path: getInputId('img'),
  runtime: getInputId('runtime')
}

const prepareData = state => {
  return {
    ...state,
    genres: state.genres.map(({value}) => value),
    overview: 'Lorem',
    runtime: Number(state.runtime),
  }
}

const initialState = {
  title: '',
  poster_path: 'https://via.placeholder.com/440x550.png?text=Pulp+Fiction',
  runtime: '',
  genres: [],
  release_date: ''
}

const ModalMovieAction = ({ currentModal, addMovieThunk, editMovieThunk, closeModal }) => {
  const [state, setState] = useState(initialState);
  const reset = () => setState(initialState);
  const onChange = (val, e, inputName) => {
    setState({
      ...state,
      [inputName]: val
    });
  }

  const modalTitle = currentModal === modalType.add ? 'Add movie' : 'Edit movie';
  const confirmHandler = currentModal === modalType.add ? (movie) => { addMovieThunk(movie); closeModal() } : editMovieThunk;

  const movieIdRow = (
    <FormRow flowAxis={flowAxisType.y}>
      <FormLabel text='movie id' />
      <p style={{ margin: 0 }}>MO32820TH</p>
    </FormRow>
  );

  return (
    <Modal title={modalTitle}>
      { (currentModal === modalType.edit) && movieIdRow}

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.title} text='title' />
        <TextField val={state.title} onChange={onChange} id={inputs.title} placeholder='Add title' mapToStateName='title' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.release_date} text='release date' />
        <GenericInput val={state.release_date} onChange={onChange} type='date' id={inputs.date} mapToStateName='release_date' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.poster_path} text='poster path' />
        <TextField val={state.poster_path} onChange={onChange} id={inputs.poster_path} placeholder='Poster path here' mapToStateName='poster_path' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel text='genre' />
        <Dropdown settings={{ optionsList: genres, width: '100%', isMulti: true, onChange, mapToStateName: 'genres', value: state.genres }} />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.runtime} text='runtime' />
        <TextField val={state.runtime} onChange={onChange} id={inputs.runtime} placeholder='Runtime here' mapToStateName='runtime' />
      </FormRow>

      <FormRow justifyContent='End'>
        <Button onClick={reset} theme={buttonThemes.dismiss} text='reset' propStyles={{ maxWidth: '100px' }} />
        <Button onClick={() => confirmHandler(prepareData(state))} theme={buttonThemes.confirm} text='submit' propStyles={{ maxWidth: '100px', marginLeft: '20px' }} />
      </FormRow>
    </Modal>
  );
};

export default connect(null, { addMovieThunk, editMovieThunk, closeModal })(ModalMovieAction);
