import { ADD_CARD, DELETE_CARD } from '../actions';

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
          id: action.id,
          task: action.task,
          priority: action.priority,
          status: action.status,
          assignedTo: action.assignedTo,
          createdBy: action.createdBy
        }
      ]
    })

    case DELETE_CARD:
    console.log('action', typeof action.id);
    return Object.assign({}, state, {
      cards:
        state.cards.filter( cards => {
          return cards.id != action.id;
        })

    })

    default:
      return state;
  }
}

export default cards;