import {createStore, combineReducers} from 'redux';

import initialState from './initialState';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import listsReducer from './listsReducer';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
