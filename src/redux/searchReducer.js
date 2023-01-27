// selectors

// actions
const createActionName = actionName => `app/columns/${actionName}`;
const UPDATE_SEARCH = createActionName('UPDATE_SEARCH');

// action creators
export const updateSearch = payload => ({type: UPDATE_SEARCH, payload});

// reducer
const searchReducer = (statePart = '', action = {}) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchReducer;
