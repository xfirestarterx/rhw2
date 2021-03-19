import React, { useEffect } from 'react';
import { closeModal, setMovies, setIsLoading } from 'store/actions';
import { connect } from 'react-redux';
import styles from './App.styl';
import Header from '../Header/Header';
import MovieHeader from '../MovieHeader/MovieHeader';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';
import normalizeMoviesData from '../../utils/normalizeMoviesData';
import ModalsWrapper from '../ModalsWrapper/ModalsWrapper';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as moviesSvc from 'utils/moviesSvc';

const MainContentWithWrapper = WithWrapper(MainContent);

const App = ({ closeModal, isModalShown, setMovies, setIsLoading }) => {
  const escapeHandler = e => e.which === 27 && isModalShown ? closeModal() : void 0;

  useEffect(async () => {
    setIsLoading(true);

    const movies = await moviesSvc.getAll();
    setMovies(normalizeMoviesData(movies));

    setIsLoading(false);
  }, []);

  return (
    <div onKeyUp={escapeHandler} className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Header} />
          <Route path='/movie/:id' component={MovieHeader} />
        </Switch>

        <MainContentWithWrapper />
        <Footer />
        <ModalsWrapper />
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = ({ modal, movies }) => ({ modal, movies });

export default connect(mapStateToProps, { closeModal, setMovies, setIsLoading })(App);
