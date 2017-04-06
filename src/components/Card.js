import React from 'react';

const Card = ( { id, task, priority, status, assignedTo, createdBy, deleteCard, moveCard } ) => (
  <div className="card">
    <h2>{ task }</h2>
    <p>{ priority }</p>
    <ul className="task-details">
      <li>{ status }</li>
      <li>{ assignedTo }</li>
      <li>{ createdBy }</li>
    </ul>
    <button id={id} onClick={deleteCard}>Delete</button>
    <button id={id} data-status={status} data-direction="left" onClick={moveCard}>&larr;</button>
    <button id={id} data-status={status} data-direction="right" onClick={moveCard}>&rarr;</button>
  </div>
);

export default Card;
