import React from 'react';
import Button, { buttonThemes } from '../Button/Button';
import FormRow from '../FormRow/FormRow';
import Modal from '../Modal/Modal';

const ModalDeleteMovie = () => {
  return (
    <Modal title='delete movie'>
      <p>Are you sure want to delete movie?</p>
      <FormRow justifyContent='End'>
        <Button theme={buttonThemes.confirm} text='confirm' propStyles={{maxWidth: '200px', marginTop: '20px'}} />
      </FormRow>
    </Modal>
  );
};

export default ModalDeleteMovie;
