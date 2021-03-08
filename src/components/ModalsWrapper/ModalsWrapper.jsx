import React from 'react';
import PropTypes from 'prop-types';
import ModalAddMovie from '../ModalAddMovie/ModalAddMovie';
import ModalEditMovie from '../ModalEditMovie/ModalEditMovie';
import { modalType } from '../Modal/Modal';
import ModalDeleteMovie from '../ModalDeleteMovie/ModalDeleteMovie';

const ModalsWrapper = ({ isModalShown, currentModal }) => {
  if (!isModalShown) return null;

  switch (currentModal) {
    case modalType.add:
      return <ModalAddMovie />;

    case modalType.edit:
      return <ModalEditMovie />;

    case modalType.delete:
      return <ModalDeleteMovie />
    
    default:
      return null;
  }
}

ModalsWrapper.propTypes = {
  isModalShown: PropTypes.bool.isRequired,
  currentModal: PropTypes.string.isRequired
}

export default ModalsWrapper;
