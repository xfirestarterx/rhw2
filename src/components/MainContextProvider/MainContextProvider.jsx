import React from 'react';
import PropTypes from 'prop-types';

export const MainContext = React.createContext({
  moviesList: [],
  isLoading: true
});
MainContext.displayName = 'MainContext';


const MainContextProvider = ({ openModal, closeModal, isLoading, moviesList, children }) => {
  return (
    <MainContext.Provider value={{ openModal, closeModal, isLoading, moviesList }}>
      { children }
    </MainContext.Provider>
  );
};

MainContextProvider.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  moviesList: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
}

export default MainContextProvider;
