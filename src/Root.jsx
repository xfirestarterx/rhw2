import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store/store';

const Root = ({ Router, location, context }) => (
    <Provider store={store}>
      <App Router={Router} location={location} context={context} />
    </Provider>
);

// Root.propTypes = {
//   Router: PropTypes.func.isRequired,
//   location: PropTypes.string,
//   context: PropTypes.shape({
//     url: PropTypes.string,
//   }),
// };
// Root.defaultProps = {
//   location: null,
//   context: null,
// };

export default hot(module)(Root);