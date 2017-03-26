import React, { Component } from 'react';

import { connect } from 'react-redux';
import {  addCard } from './../../actions';

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
    console.log(obj);
  }

  addCard = (event) => {
    event.preventDefault();
    this.props.onAddCard(
      event.target.task.value,
      event.target.priority.value,
      event.target.status.value,
      event.target.assignedTo.value,
      )
    // post to api
  }
  render() {
    return(
      <form action="http://localhost:9000/task" method="POST" onSubmit={this.addCard} onChange={this.handleChange}>
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

        <label name="createdBy">
          Created By
          <select id="createdBy" name="createdBy">
            <option value="caitypizza">caitypizza</option>
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
          value="Add Task"/>
      </form>
    );
  }
}

// export default CardForm;

const mapStateToProps = (state) => {
    return {
      cards: state.cards
    }
  };

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (task, priority, status, createdBy, assignedTo) => {
      dispatch(addCard(task, priority, status, createdBy, assignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);