export const ADD_CARD = 'ADD_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export function addCard(id, task, priority, status, assignedTo, createdBy) {
  return {
    type: ADD_CARD,
    id,
    task,
    priority,
    status,
    assignedTo,
    createdBy
  };
}

export function moveCard(id, status, target) {
  return {
    type: MOVE_CARD,
    id,
    status,
    target
  };
}


export function deleteCard(id) {
  return {
    type: DELETE_CARD,
    id
  };
}
