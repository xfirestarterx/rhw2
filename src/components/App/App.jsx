import React from 'react';
import './App.styl';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import WithWrapper from '../WithWrapper/WithWrapper';

const MainContentWithWrapper = WithWrapper(MainContent);

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContentWithWrapper />
      <Footer />
    </div>
  );
};

export default App;
