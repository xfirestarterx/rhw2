import React from 'react';
import styles from './App.styl';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';
import fetchMovies from '../../utils/fetchMovies';
import normalizeMoviesData from '../../utils/normalizeMoviesData';
import MainContextProvider from '../MainContextProvider/MainContextProvider';

const MainContentWithWrapper = WithWrapper(MainContent);
class App extends React.Component {
  state = {
    moviesList: [],
    isLoading: true
  }

  render() {
    const { isLoading, moviesList } = this.state;

    return (
      <MainContextProvider isLoading={isLoading} moviesList={moviesList}>
        <div className={styles.App}>
          <Header />
          <MainContentWithWrapper />
          <Footer />
        </div>
      </MainContextProvider>
    );
  }

  async componentDidMount() {
    const fetchedMoviesData = await fetchMovies();

    this.setState({
      ...this.state,
      isLoading: false,
      moviesList: normalizeMoviesData(fetchedMoviesData)
    });
  }
}

export default App;
