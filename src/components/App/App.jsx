import React, { useEffect } from 'react';
import { closeModal } from 'store/actions';
import { connect } from 'react-redux';
import { setMoviesByTerms } from 'store/actions';
import styles from './App.styl';
import Header from '../Header/Header';
import MovieHeader from '../MovieHeader/MovieHeader';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';
import ModalsWrapper from '../ModalsWrapper/ModalsWrapper';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFoundPage from 'components/NotFoundPage/NotFoundPage';

const MainContentWithWrapper = WithWrapper(MainContent);

const App = ({ closeModal, isModalShown, setMoviesByTerms }) => {
  const escapeHandler = e => e.which === 27 && isModalShown ? closeModal() : void 0;
  
  useEffect(() => {
    const url = new URL(window.location);
    const searchParams = Object.fromEntries(url.searchParams);
    setMoviesByTerms(searchParams);
  }, []);

  const pageBottom = (
    <>
      <MainContentWithWrapper />
      <Footer />
      <ModalsWrapper />
    </>
  );
  return (
    <div onKeyUp={escapeHandler} className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Header />
            { pageBottom }
          </Route>
          <Route path='/movie/:id'>
            <MovieHeader />
            { pageBottom }
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps, { closeModal, setMoviesByTerms })(App);
