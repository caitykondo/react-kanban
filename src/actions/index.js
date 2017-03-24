export const ADD_CARD = 'ADD_CARD';

export function addCard(task, priority, status, createdBy, assignedTo) {
  return {
    type: ADD_CARD,
    task,
    priority,
    status,
    createdBy,
    assignedTo
  };
}
