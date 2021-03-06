import React from 'react';
import styles from './App.styl';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';
import fetchMovies from '../../utils/fetchMovies';
import normalizeMoviesData from '../../utils/normalizeMoviesData';

const MainContentWithWrapper = WithWrapper(MainContent);
class App extends React.Component {
  state = {
    movies: [],
    isLoading: true
  }

  render() {
    return (
      <div className={styles.App}>
        <Header />
        <MainContentWithWrapper />
        <Footer />
      </div>
    );
  }

  async componentDidMount() {
    const fetchedMoviesData = await fetchMovies();
    const normalizedMoviesData = normalizeMoviesData(fetchedMoviesData);
  }
}

export default App;
