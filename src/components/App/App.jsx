import React from 'react';
import styles from './App.styl';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';
import fetchMovies from '../../utils/fetchMovies';
import normalizeMoviesData from '../../utils/normalizeMoviesData';
import MainContextProvider from '../MainContextProvider/MainContextProvider';
import ModalsWrapper from '../ModalsWrapper/ModalsWrapper';
import { modalType } from '../Modal/Modal';

const MainContentWithWrapper = WithWrapper(MainContent);
class App extends React.Component {
  state = {
    moviesList: [],
    isLoading: true,
    currentModal: modalType.none,
    isModalShown: false
  }

  render() {
    const {
      isLoading,
      moviesList,
      currentModal,
      isModalShown
    } = this.state;

    const openModal = modalType => this.setState({...this.state, isModalShown: true, currentModal: modalType});

    const closeModal = () => this.setState({...this.state, isModalShown: false, currentModal: modalType.none});

    return (
      <MainContextProvider openModal={openModal} closeModal={closeModal} isLoading={isLoading} moviesList={moviesList}>
        <div className={styles.App}>
          <Header />
          <MainContentWithWrapper />
          <Footer />
          <ModalsWrapper currentModal={currentModal} isModalShown={isModalShown} />
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
