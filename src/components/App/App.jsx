import React, { useEffect, useState } from 'react';
import { closeModal } from 'store/actions';
import { connect } from 'react-redux';
import styles from './App.styl';
import Header from '../Header/Header';
import MovieHeader from '../MovieHeader/MovieHeader';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';
import fetchMovies from '../../utils/fetchMovies';
import normalizeMoviesData from '../../utils/normalizeMoviesData';
import MainContext from '../MainContext/MainContext';
import ModalsWrapper from '../ModalsWrapper/ModalsWrapper';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const MainContentWithWrapper = WithWrapper(MainContent);

const App = ({ closeModal, isModalShown }) => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const escapeHandler = e => e.which === 27 && isModalShown ? closeModal() : void 0;

  useEffect(async () => {
    const fetchedMoviesData = await fetchMovies();

    setIsLoading(false);
    setMoviesList(normalizeMoviesData(fetchedMoviesData));
  }, []);

  return (
    <MainContext.Provider value={{ isLoading, moviesList }} >
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
    </MainContext.Provider>
  );
};

const mapStateToProps = ({ modal }) => modal;

export default connect(mapStateToProps, { closeModal })(App);
