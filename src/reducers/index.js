import { ADD_CARD, DELETE_CARD, MOVE_CARD } from '../actions';

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

    case MOVE_CARD:
    return Object.assign({}, state, {
      cards:
      state.cards.map( card => {
        // find card to move
        if (card.id === parseInt(action.id)){
          card.status = action.target;
          return card;
        }else{
          return card;
        }
      })
    })

    case DELETE_CARD:
    return Object.assign({}, state, {
      cards:
        state.cards.filter( cards => {
          return cards.id !== parseInt(action.id);
        })

    })

    default:
      return state;
  }
}

export default cards;