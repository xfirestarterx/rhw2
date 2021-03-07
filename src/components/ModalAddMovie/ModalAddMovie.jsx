import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import FormLabel from '../FormLabel/FormLabel';
import TextField from '../TextField/TextField';
import Button, { buttonThemes } from '../Button/Button';

const ModalAddMovie = () => {
  return (
    <Modal title='Add movie'>
      <FormLabel text={'title'} attrFor='input-title' />
      <TextField text='Add title' id='input-title' />

      <Button theme={buttonThemes.dismiss} text='Reset' />
      <Button theme={buttonThemes.confirm} text='Submit' />
    </Modal>
  );
};

ModalAddMovie.propTypes = {}

export default ModalAddMovie;
