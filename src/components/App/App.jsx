import React from 'react';
import { closeModal, setMoviesByTerms } from '../../store/actions';
import { connect } from 'react-redux';
import styles from './App.styl';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import HomePage from '../../pages/HomePage';
import MoviePage from '../../pages/MoviePage';

const App = ({Router, location, context, closeModal, isModalShown }) => {
  const escapeHandler = e => e.which === 27 && isModalShown ? closeModal() : void 0;

  return (
    <div onKeyUp={escapeHandler} className={styles.App}>
      <Router location={location} context={context}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/movie/:id' component={MoviePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
};

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps, { closeModal, setMoviesByTerms })(App);
