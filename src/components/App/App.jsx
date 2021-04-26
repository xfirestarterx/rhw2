import React, { useEffect } from 'react';
import { closeModal, setMoviesByTerms } from '../../store/actions';
import { connect } from 'react-redux';
import styles from './App.styl';
import Header from '../Header/Header';
import MovieHeader from '../MovieHeader/MovieHeader';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';
import ModalsWrapper from '../ModalsWrapper/ModalsWrapper';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const MainContentWithWrapper = WithWrapper(MainContent);

const App = ({Router, location, context, closeModal, isModalShown, setMoviesByTerms }) => {
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
      <Router location={location} context={context}>
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
      </Router>
    </div>
  );
};

const mapStateToProps = ({ modal }) => ({ modal });

export default connect(mapStateToProps, { closeModal, setMoviesByTerms })(App);
