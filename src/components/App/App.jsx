import React from 'react';
import './App.styl';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
