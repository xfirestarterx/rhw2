import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import App from './components/App/App';
import { Provider } from 'react-redux';

const Root = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <App Router={Router} location={location} context={context} />
  </Provider>
);

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.object
};

export default hot(module)(Root);