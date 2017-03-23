import React, { Component } from 'react';

class CardForm extends Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <form action="http://localhost:9000/task" method="POST">
        <label name="task">
          Task
          <input name="task" id="task" type="text"/>
        </label>

        <label name="task">
          Priority
          <select name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label name="status">
          Status
          <select name="status">
            <option value="on hold">On Hold</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label name="assignedTo">
          Assigned To
          <select name="assignedTo">
            <option value="caitypizza">caitypizza</option>
          </select>
        </label>

        <input type="submit" value="Add Task"/>
      </form>
    );
  }
}

export default CardForm;