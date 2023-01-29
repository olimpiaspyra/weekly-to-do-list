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

export const getCardToRemove = ({cards}, cardId) => {
  return cards.filter(card => card.id === cardId);
};

// actions
const createActionName = actionName => `app/cards/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_IMPORTANT = createActionName('TOGGLE_CARD_IMPORTANT');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCard = payload => ({type: ADD_CARD, payload});
export const toggleCardImportant = payload => ({type: TOGGLE_CARD_IMPORTANT, payload});
export const removeCard = payload => ({type: REMOVE_CARD, payload});

// reducer
const cardsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, {...action.payload, id: shortid()}];
    case TOGGLE_CARD_IMPORTANT:
      return statePart.map(card =>
        card.id === action.payload ? {...card, isImportant: !card.isImportant} : card
      );
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload);
    default:
      return statePart;
  }
};

export default cardsReducer;
