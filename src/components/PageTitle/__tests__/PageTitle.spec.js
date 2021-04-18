import React from 'react';
import renderer from 'react-test-renderer';
import PageTitle from '../PageTitle';

describe('<PageTitle> spec', () => {
  it('renders', () => {
    const tree = renderer
    .create(<PageTitle text="title" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
  });
});