import shortid from 'shortid';

//selectors
export const getAllLists = ({lists}) => lists;

export const getListsById = ({lists}, listId) =>
  lists.filter(list => list.id === listId);

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

//action creators
export const addList = payload => ({type: ADD_LIST, payload});

//reducer
const listsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_LIST:
      return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
  }
};

export default listsReducer;
