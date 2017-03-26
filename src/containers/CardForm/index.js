import React, { Component } from 'react';

import { connect } from 'react-redux';
import {  addCard } from './../../actions';

class CardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task:'',
      priority: '',
      status: '',
      assignedTo: '',
      createdBy: ''
    }
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.id]: event.target.value
      }
    )
  }

  addCard = (event) => {
    event.preventDefault();

    this.props.onAddCard(

      event.target.task.value,
      event.target.priority.value,
      event.target.status.value,
      event.target.assignedTo.value,
      event.target.createdBy.value,
    );
    // api call
    // let ps = this;

    // let endpoint = 'http://localhost:9000/task';
    // let xmlHttp = new XMLHttpRequest();
    // xmlHttp.open("POST", endpoint, true);
    // xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    // xmlHttp.send(JSON.parse(this.state));
  }

  sendData = (event) =>{
    let endpoint = 'http://localhost:9000/task';

    // let req = encodeURIComponent(JSON.stringify(this.state));

    let obj = this.state;
    let q = ''
    for(name in obj){
       q +=  encodeURIComponent(name)+"="+encodeURIComponent(obj[name])+"&";
    }

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", endpoint);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.send(q);
  }

  render() {
    // console.log(this.state)
    return(
      <form onSubmit={this.addCard} onChange={this.handleChange}>
        <label name="task">
          Task
          <input name="task" id="task" type="text" />
        </label>

        <label name="priority">
          Priority
          <select id="priority" name="priority">
            <option disabled selected hidden value></option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label name="status">
          Status
          <select id="status" name="status">
            <option disabled selected hidden value></option>
            <option value="on hold">On Hold</option>
            <option value="in progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label name="createdBy">
          Created By
          <select id="createdBy" name="createdBy">
            <option disabled selected hidden value></option>
            <option value="caitypizza">caitypizza</option>
          </select>
        </label>

        <label name="assignedTo">
          Assigned To
          <select id="assignedTo" name="assignedTo">
            <option disabled selected hidden value></option>
            <option value="caitypizza">caitypizza</option>
          </select>
        </label>

        <input
          type="submit"
          value="Add Task"
          onClick={this.sendData}
        />
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