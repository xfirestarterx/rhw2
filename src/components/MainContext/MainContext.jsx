import React from 'react';

const MainContext = React.createContext({
  moviesList: [],
  isLoading: true,
  openModal: () => {},
  closeModal: () => {}
});

MainContext.displayName = 'MainContext';

export default MainContext;
