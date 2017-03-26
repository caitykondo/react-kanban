import React, { Component } from 'react';

import { connect } from 'react-redux';
import {  addCard } from './../../actions';

class CardForm extends Component {

  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    let obj = {};
    let key = event.target.id;
    obj[key] = event.target.value;
    console.log(obj);
  }

  addCard = (event) => {
    event.preventDefault();
    console.log(event.target.task.value),

    this.props.onAddCard(
      event.target.task.value,
      event.target.priority.value,
      event.target.status.value,
      event.target.assignedTo.value,
      event.target.createdBy.value,
    );
    // api call
    let ps = this;

    let endpoint = 'http://localhost:9000/task';
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");

    // cardsReq.addEventListener("load", cardsReqListener);
    xmlHttp.open("POST", endpoint);
    xmlHttp.send();
  }

  render() {
    console.log(this.props);
    return(
      <form onSubmit={this.addCard}>
        <label name="task">
          Task
          <input name="task" id="task" type="text" />
        </label>

        <label name="priority">
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

const mapStateToProps = (state) => {
    return {
      cards: state.cards
    }
  };

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCard: (task, priority, status, assignedTo, createdBy) => {
      dispatch(addCard(task, priority, status, assignedTo, createdBy));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardForm);