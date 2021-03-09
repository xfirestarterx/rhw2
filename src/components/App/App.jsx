import React, { useCallback, useEffect, useState } from 'react';
import styles from './App.styl';
import Header from '../Header/Header';
import MovieHeader from '../MovieHeader/MovieHeader';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';
import fetchMovies from '../../utils/fetchMovies';
import normalizeMoviesData from '../../utils/normalizeMoviesData';
import MainContextProvider from '../MainContextProvider/MainContextProvider';
import ModalsWrapper from '../ModalsWrapper/ModalsWrapper';
import { modalType } from '../Modal/Modal';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const MainContentWithWrapper = WithWrapper(MainContent);

const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentModal, setCurrentModal] = useState(modalType.none);
  const [isModalShown, setIsModalShown] = useState(false);

  const openModal = useCallback(modalType => {
    setCurrentModal(modalType);
    setIsModalShown(true);
  }, [currentModal, isModalShown]);

  const closeModal = useCallback(() => {
    setCurrentModal(modalType.none);
    setIsModalShown(false);
  }, [currentModal, isModalShown]);

  useEffect(async () => {
    const fetchedMoviesData = await fetchMovies();

    setIsLoading(false);
    setMoviesList(normalizeMoviesData(fetchedMoviesData));
  }, []);

  return (
    <MainContextProvider openModal={openModal} closeModal={closeModal} isLoading={isLoading} moviesList={moviesList}>
      <div className={styles.App}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/movie/:id' component={MovieHeader} />
          </Switch>
        </BrowserRouter>

        <MainContentWithWrapper />
        <Footer />
        <ModalsWrapper currentModal={currentModal} isModalShown={isModalShown} />
      </div>
    </MainContextProvider>
  );
};

export default App;
