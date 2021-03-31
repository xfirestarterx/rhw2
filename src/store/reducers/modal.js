import { OPEN_MODAL, CLOSE_MODAL } from 'store/actionTypes';
import { modalType } from 'components/Modal/Modal';

const initialState = {
  currentModal: modalType.none,
  isModalShown: false,
  movieId: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        isModalShown: true,
        currentModal: action.payload.currentModal,
        movieId: action.payload.movieId
      }
    }

    case CLOSE_MODAL: {
      return {
        isModalShown: false,
        currentModal: modalType.none,
        movieId: undefined
      }
    }

    default: {
      return state;
    }
  }
}
