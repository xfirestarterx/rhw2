import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );

  return store;
};
