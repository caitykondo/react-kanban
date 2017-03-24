import React, { Component } from 'react';

class CardForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      task: '',
      priority: 'low',
      status: 'on hold',
      createdBy: '',
      assignedTo: ''
    }
  }

  handleChange = (event) => {
    let obj = {};
    let key = event.target.id;
    obj[key] = event.target.value;
    this.setState(obj)
    console.log(this.state);
  }

  render() {
    return(
      <form action="http://localhost:9000/task" method="POST" onChange={this.handleChange}>
        <label name="task">
          Task
          <input name="task" id="task" type="text" />
        </label>

        <label name="task">
          Priority
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label name="status">
          Status
          <select id="status" name="status">
            <option value="on hold">On Hold</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label name="assignedTo">
          Assigned To
          <select id="assignedTo" name="assignedTo">
            <option value="caitypizza">caitypizza</option>
          </select>
        </label>

        <input
          type="submit"
          data-card={ JSON.stringify(this.state) }
          onClick={ this.props.addCard }
          value="Add Task"/>
      </form>
    );
  }
}

export default CardForm;