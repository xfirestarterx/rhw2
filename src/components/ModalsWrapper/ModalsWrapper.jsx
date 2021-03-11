import React from 'react';
import PropTypes from 'prop-types';
import { modalType } from '../Modal/Modal';
import ModalDeleteMovie from '../ModalDeleteMovie/ModalDeleteMovie';
import ModalMovieAction from '../ModalMovieAction/ModalMovieAction';

const ModalsWrapper = ({ isModalShown, currentModal }) => {
  if (!isModalShown) return null;

  switch (currentModal) {
    case modalType.add:
      return <ModalMovieAction currentModal={currentModal}/>;

    case modalType.edit:
      return <ModalMovieAction currentModal={currentModal} />;

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
