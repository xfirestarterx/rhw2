import React from 'react';
import store from 'store/store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ModalMovieAction from '../ModalMovieAction';
import { modalType } from 'components/Modal/Modal';

const renderComponent = () => {
  return render(
    <Provider store={store}>
      <ModalMovieAction
        currentModal={modalType.add} />
    </Provider>
  );
};

const getByName = (container, name) => container.querySelector(`[name="${name}"]`);
const res = { json: jest.fn() };
global.fetch = jest.fn(() => Promise.resolve(res));

describe('<ModalMovieAction /> spec', () => {
  it('renders', () => {
    expect(renderComponent().asFragment).toMatchSnapshot();
  });

  it('validates fields', async () => {
    const { container } = renderComponent();

    userEvent.click(screen.getByText('submit'));
    expect(await screen.findByTestId('title-input-error')).toBeInTheDocument();

    userEvent.type(getByName(container, 'title'), 'Some title');
    expect(await screen.findByTestId('title-input-error')).not.toBeInTheDocument();
  });

  it('closes the modal when form is submitted', async () => {
    const { container } = renderComponent();
    const { modal } = store.getState();
    const expectedState = {
      currentModal: modalType.none,
      isModalShown: false,
      movieId: undefined
    };

    userEvent.type(getByName(container, 'title'), 'Some title');
    userEvent.type(getByName(container, 'release_date'), '2021-04-21');
    userEvent.selectOptions(getByName(container, 'genres'), ['Action']);
    userEvent.type(getByName(container, 'runtime'), '123');

    userEvent.click(screen.getByText('submit'));
    expect(modal).toEqual(expectedState);
  });

  it('resets form on reset button click', () => {
    const { container } = renderComponent();
    const titleInput = getByName(container, 'title');

    userEvent.type(titleInput, 'Some title');
    userEvent.click(screen.getByText('reset'));

    expect(titleInput.value).toEqual('');
  });
});
