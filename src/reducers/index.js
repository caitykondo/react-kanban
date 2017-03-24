import { ADD_CARD } from '../actions';

const initialState = {
  cards: []
};

function cards(state = initialState, action) {
  switch( action.type ){
    case ADD_CARD:
    return Object.assign({}, state, {
      books: [
        ...state.cards,
        {
          title: action.task,
          priority: action.priority,
          status: action.status,
          createdBy: action.createdBy,
          assignedTo: action.assignedTo,
        }
      ]
    })
    default:
      return state;
  }
}

export default cards;