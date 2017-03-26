import React from 'react';

const Card = ( { task, priority, status, assignedTo, createdBy } ) => (
  <div>
    <h2>{ task }</h2>
    <p>{ priority }</p>
    <ul className="task-details">
      <li>{ status }</li>
      <li>{ assignedTo }</li>
      <li>{ createdBy }</li>
    </ul>
  </div>
);

export default Card;
