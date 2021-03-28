import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { modalType } from '../Modal/Modal';
import ModalDeleteMovie from '../ModalDeleteMovie/ModalDeleteMovie';
import ModalMovieAction from '../ModalMovieAction/ModalMovieAction';

const ModalsWrapper = ({ isModalShown, currentModal, movieId }) => {
  if (!isModalShown) return null;

  switch (currentModal) {
    case modalType.add:
      return <ModalMovieAction currentModal={currentModal}/>;

    case modalType.edit:
      return <ModalMovieAction movieId={movieId} currentModal={currentModal} />;

    case modalType.delete:
      return <ModalDeleteMovie movieId={movieId} />;
    
    default:
      return null;
  }
}

const mapStateToProps = ({ modal }) => modal;

ModalsWrapper.propTypes = {
  isModalShown: PropTypes.bool.isRequired,
  currentModal: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(ModalsWrapper);
