import React from 'react';
import { connect } from 'react-redux';
import { deleteMovieThunk, closeModal } from '../../store/actions';
import Button, { buttonThemes } from '../Button/Button';
import FormRow from '../FormRow/FormRow';
import Modal from '../Modal/Modal';

const ModalDeleteMovie = ({ movieId, deleteMovieThunk, closeModal }) => {
  const clickHandler = () => {
    deleteMovieThunk(movieId);
    closeModal();
  }

  return (
    <Modal title='delete movie'>
      <p>Are you sure want to delete movie?</p>
      <FormRow justifyContent='End'>
        <Button onClick={clickHandler} theme={buttonThemes.confirm} text='confirm' propStyles={{maxWidth: '200px', marginTop: '20px'}} />
      </FormRow>
    </Modal>
  );
};

export default connect(null, { deleteMovieThunk, closeModal })(ModalDeleteMovie);
