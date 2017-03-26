export const ADD_CARD = 'ADD_CARD';

export function addCard(task, priority, status, assignedTo, createdBy) {
  return {
    type: ADD_CARD,
    // pass extra data to reducers
    task,
    priority,
    status,
    assignedTo,
    createdBy
  };
}
