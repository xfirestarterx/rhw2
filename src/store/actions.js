import * as actionTypes from './actionTypes';

export const openModal = (modalType) => ({
  type: actionTypes.OPEN_MODAL,
  payload: {
    currentModal: modalType
  }
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL
});
