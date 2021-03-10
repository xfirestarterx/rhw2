import React, { useCallback, useContext } from 'react';
import Button, { buttonThemes } from '../Button/Button';
import FormRow from '../FormRow/FormRow';
import MainContext from '../MainContext/MainContext';
import Modal from '../Modal/Modal';

const ModalDeleteMovie = () => {
  const { deleteMovie, closeModal } = useContext(MainContext);
  const confirmHandler = useCallback(() => {
    deleteMovie(1);
    closeModal();
  }, []);

  return (
    <Modal title='delete movie'>
      <p>Are you sure want to delete movie?</p>
      <FormRow justifyContent='End'>
        <Button onClick={confirmHandler} theme={buttonThemes.confirm} text='confirm' propStyles={{maxWidth: '200px', marginTop: '20px'}} />
      </FormRow>
    </Modal>
  );
};

export default ModalDeleteMovie;
