import { createStore, combineReducers, compose } from 'redux';
import reducers from './reducers';

const reducer = combineReducers({ ...reducers });

const rootReducer = (defaultState, action) => {
  let state = defaultState;
  return reducer(state, action);
};

const composeEnhancers = typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;



export const store = composeEnhancers()(createStore)(rootReducer);

export default store;
