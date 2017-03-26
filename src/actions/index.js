export const ADD_CARD = 'ADD_CARD';

export function addCard(task, priority, status, assignedTo, createdBy) {
  return {
    type: ADD_CARD,
    task,
    priority,
    status,
    assignedTo,
    createdBy
  };
}
