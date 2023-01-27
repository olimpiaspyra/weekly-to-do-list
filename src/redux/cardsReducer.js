import shortid from 'shortid';

import searchContains from '../utils/searchContains';

// selectors
export const getCardsById = ({cards, search}, columnId) => {
  return cards.filter(
    card => card.columnId === columnId && searchContains(card.title, search)
  );
};

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const addCard = payload => ({type: ADD_CARD, payload});

// reducer
const cardsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
  }
};

export default cardsReducer;
