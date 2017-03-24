import React, { Component } from 'react';
import KanbanBoard from '../../containers/KanbanBoard';
import { connect } from 'react-redux';
import {  addCard } from './../../actions';


class App extends Component {

  componentWillMount() {
    let ps = this;
    function cardsReqListener() {
      JSON.parse(this.responseText).map( card => {
          console.log('add cards');
        return ps.props.onAddCard(
          card.task,
          card.priority,
          card.status,
          card.createdBy,
          card.assignedTo
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
        // props={this.props}
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
    onAddCard: (task, priority, status, createdBy, assignedTo) => {
      dispatch(addCard(task, priority, status, createdBy, assignedTo));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);