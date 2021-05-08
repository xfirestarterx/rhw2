import React from 'react';
import WithWrapper from '../components/WithWrapper/WithWrapper';
import MainContent from '../components/MainContent/MainContent';
import Footer from '../components/Footer/Footer';
import ModalsWrapper from '../components/ModalsWrapper/ModalsWrapper';

const MainContentWithWrapper = WithWrapper(MainContent);

export default (
  <>
    <MainContentWithWrapper />
    <Footer />
    <ModalsWrapper />
  </>
);
