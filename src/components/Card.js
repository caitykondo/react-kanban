import React from 'react';

const Card = ( { id, task, priority, status, assignedTo, createdBy, deleteCard } ) => (
  <div>
    <small>{ id }</small>
    <h2>{ task }</h2>
    <p>{ priority }</p>
    <ul className="task-details">
      <li>{ status }</li>
      <li>{ assignedTo }</li>
      <li>{ createdBy }</li>
    </ul>
    <button id={id} onClick={deleteCard}>Delete</button>
  </div>
);

export default Card;
