import React from 'react';
import FormLabel from '../FormLabel/FormLabel';
import FormRow, { flowAxisType } from '../FormRow/FormRow';
import Modal, { modalType } from '../Modal/Modal';
import TextField from '../TextField/TextField';
import GenericInput from '../GenericInput/GenericInput';
import LabeledDropdown, { containerWidth, dropdownTheme } from '../LabeledDropdown/LabeledDropdown';
import Button, { buttonThemes } from '../Button/Button';

const getInputId = (name) => `modal-add-input-${name}`;

const inputs = {
  title: getInputId('title'),
  date: getInputId('date'),
  movieUrl: getInputId('movie-url'),
  overview: getInputId('overview'),
  runtime: getInputId('runtime')
}

const genres = [
  {
    value: undefined,
    text: 'Select genre'
  },
  {
    value: 'action & adventure',
    text: 'Action & Adventure'
  },
  {
    value: 'music',
    text: 'Music'
  }
];

const ModalMovieAction = ({ currentModal }) => {
  const title = currentModal === modalType.add ? 'Add movie' : 'Edit movie';

  const movieIdRow = (
    <FormRow flowAxis={flowAxisType.y}>
      <FormLabel text='movie id' />
      <p style={{margin: 0}}>MO32820TH</p>
    </FormRow>
  );

  return (
    <Modal title={title}>
      { (currentModal === modalType.edit) && movieIdRow }

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.title} text='title' />
        <TextField id={inputs.title} placeholder='Add title' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.date} text='release date' />
        <GenericInput type='date' id={inputs.date} />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.movieUrl} text='movie url' />
        <TextField id={inputs.movieUrl} placeholder='Movie url here' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel text='genre' />
        <LabeledDropdown optionsList={genres} width={containerWidth.full} theme={dropdownTheme.dark} />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.overview} text='overview' />
        <TextField id={inputs.overview} placeholder='Overview here' />
      </FormRow>

      <FormRow flowAxis={flowAxisType.y}>
        <FormLabel attrFor={inputs.runtime} text='runtime' />
        <TextField id={inputs.runtime} placeholder='Runtime here' />
      </FormRow>

      <FormRow justifyContent='End'>
        <Button theme={buttonThemes.dismiss} text='reset' propStyles={{maxWidth: '100px'}} />
        <Button theme={buttonThemes.confirm} text='submit' propStyles={{maxWidth: '100px', marginLeft: '20px'}} />
      </FormRow>
    </Modal>
  );
};

export default ModalMovieAction;
