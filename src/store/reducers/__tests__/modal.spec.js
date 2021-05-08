import store from 'store/store';
import { openModal, closeModal } from 'store/actions';
import { modalType } from 'components/Modal/Modal';
import reducer from '../modal';

describe('Modal reducer', () => {
  const movieId = '1';

  it('returns the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('returns correct state when opening modal', () => {
    const expectedState = {
      currentModal: modalType.edit,
      isModalShown: true,
      movieId,
    };

    expect(
      reducer(undefined, openModal(modalType.edit, movieId)),
    ).toEqual(expectedState);
  });

  it('returns correct state when closing modal', () => {
    const expectedState = {
      isModalShown: false,
      currentModal: modalType.none,
      movieId: undefined,
    };

    expect(
      reducer(undefined, closeModal()),
    ).toEqual(expectedState);
  });
});
