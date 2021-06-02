import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { closeModal, setMoviesByTerms } from '../../store/actions';
import styles from './App.styl';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import HomePage from '../../pages/HomePage';
import MoviePage from '../../pages/MoviePage';

const App = ({
  Router, location, context, closeModal, isModalShown,
}) => {
  const escapeHandler = (e) => (e.which === 27 && isModalShown ? closeModal() : void 0);

  return (
    <div onKeyUp={escapeHandler} className={styles.App}>
      <Router location={location} context={context}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ modal }) => ({ modal });

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  closeModal: PropTypes.func.isRequired,
  isModalShown: PropTypes.bool
}

export default connect(mapStateToProps, { closeModal, setMoviesByTerms })(App);
