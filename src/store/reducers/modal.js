import { OPEN_MODAL, CLOSE_MODAL } from 'store/actionTypes';
import { modalType } from 'components/Modal/Modal';

const initialState = {
  currentModal: modalType.none,
  isModalShown: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        isModalShown: true,
        currentModal: action.payload.currentModal
      }
    }

    case CLOSE_MODAL: {
      return {
        isModalShown: false,
        currentModal: modalType.none
      }
    }

    default: {
      return state;
    }
  }
}
