import shortid from 'shortid';

import searchContains from '../utils/searchContains';

// selectors
export const getCardsById = ({cards, search}, columnId) => {
  return cards.filter(
    card => card.columnId === columnId && searchContains(card.title, search)
  );
};

export const getImportantCard = ({cards}) => {
  return cards.filter(card => card.isImportant === true);
};

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_IMPORTANT = createActionName('TOGGLE_CARD_IMPORTANT');

// action creators
export const addCard = payload => ({type: ADD_CARD, payload});
export const toggleCardImportant = payload => ({type: TOGGLE_CARD_IMPORTANT, payload});

// reducer
const cardsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, {...action.payload, id: shortid()}];
    case TOGGLE_CARD_IMPORTANT:
      return statePart.map(card =>
        card.id === action.payload ? {...card, isImportant: !card.isImportant} : card
      );
    default:
      return statePart;
  }
};

export default cardsReducer;
