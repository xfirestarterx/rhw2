import React from 'react';
import store from 'store/store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieDetails from '../MovieDetails';

const renderComponent = (movie) => {
  return render(
    <Provider store={store}>
      <MovieDetails movie={movie} />
    </Provider>
  );
};

describe('<MovieDetails /> spec', () => {
  it('renders if movie passed', () => {
    const movie = {
      id: 1,
      img: 'https://via.placeholder.com/440x550.png?text=Pulp+Fiction',
      title: 'title',
      subtitle: 'subtitle',
      label: 'label'
    };

    expect(renderComponent(movie).asFragment).toMatchSnapshot();
  });

  it('renders nothing if movie was not passed', () => {
    expect(renderComponent()?.container).toBeEmptyDOMElement();
  });
});
