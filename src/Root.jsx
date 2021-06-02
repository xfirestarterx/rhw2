import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import App from './components/App/App';

const Root = ({
  Router, location, context, store,
}) => (
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
  store: PropTypes.shape({}),
};

Root.defaultProps = {
  location: undefined,
  context: {},
  store: {},
};

export default hot(module)(Root);
