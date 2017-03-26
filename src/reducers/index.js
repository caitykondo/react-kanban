import { ADD_CARD } from '../actions';

const initialState = {
  cards: []
};

function cards(state = initialState, action) {
  switch( action.type ){
    case ADD_CARD:
    return Object.assign({}, state, {
      cards: [
        ...state.cards,
        {
          task: action.task,
          priority: action.priority,
          status: action.status,
          assignedTo: action.assignedTo,
          createdBy: action.createdBy
        }
      ]
    })
    default:
      return state;
  }
}

export default cards;