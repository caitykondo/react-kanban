import React from 'react';

const Card = ( {task, priority, status, createdBy, assignedTo} ) => (
  <div>
    <h2>{ task }</h2>
    <p>{ priority }</p>
    <ul className="task-details">
      <li>{ status }</li>
      <li>{ createdBy }</li>
      <li>{ assignedTo }</li>
    </ul>
  </div>
);

export default Card;
