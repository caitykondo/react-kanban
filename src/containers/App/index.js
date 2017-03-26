import React, { Component } from 'react';
import KanbanBoard from '../../containers/KanbanBoard';
import { connect } from 'react-redux';
import {  addCard } from './../../actions';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let ps = this;
    function cardsReqListener() {
      JSON.parse(this.responseText).map( card => {

        return ps.props.onAddCard(
          card.task,
          card.priority,
          card.status,
          card.assignedTo,
          card.createdBy
        );
      })
    }
    let endpoint = 'http://localhost:9000/task';
    let cardsReq = new XMLHttpRequest();
    cardsReq.addEventListener("load", cardsReqListener);
    cardsReq.open("GET", endpoint);
    cardsReq.send();
  }

  render() {
    return (
      <KanbanBoard
      />
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
)(App);