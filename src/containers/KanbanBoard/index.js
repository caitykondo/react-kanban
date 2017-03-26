import React, { Component } from 'react';

import KanbanColumn from '../../containers/KanbanColumn';
import CardForm from '../../containers/CardForm';
import { connect } from 'react-redux';
import {  addCard } from './../../actions';


class KanbanBoard extends Component {
  constructor(props) {
    super(props);
    this.statusList = ['on hold', 'in progress', 'done']
  }

  render() {
    return (
      <div className="kanban-board">
        {
          this.statusList.map( status => {
            return(
              <KanbanColumn
                key={ Math.random() }
                status={ status }
                cards={ this.props.cards }
              />
            )
          })
        }
        <CardForm
        />
      </div>
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
)(KanbanBoard);