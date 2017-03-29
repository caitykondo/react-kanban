import React, { Component } from 'react';
import KanbanBoard from '../../containers/KanbanBoard';
import { connect } from 'react-redux';
import {  addCard, deleteCard } from './../../actions';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let ps = this;
    function cardsReqListener() {
      JSON.parse(this.responseText).map( card => {

        return ps.props.onAddCard(
          card.id,
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
    console.log(this.props);
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
    onAddCard: (id, task, priority, status, assignedTo, createdBy) => {
      dispatch(addCard(id, task, priority, status, assignedTo, createdBy));
    },
    deleteCard: (id) => {
      dispatch(deleteCard(id));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);