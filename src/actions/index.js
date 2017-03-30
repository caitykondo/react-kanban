export const ADD_CARD = 'ADD_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export function addCard(id, task, priority, status, assignedTo, createdBy) {
  return {
    type: ADD_CARD,
    // pass extra data to reducers
    id,
    task,
    priority,
    status,
    assignedTo,
    createdBy
  };
}

export function moveCard(id, status, direction) {
  return {
    type: MOVE_CARD,
    id,
    status,
    direction
  };
}


export function deleteCard(id) {
  return {
    type: DELETE_CARD,
    id
  };
}
