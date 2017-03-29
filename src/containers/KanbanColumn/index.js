import React, { Component } from 'react';
import Card from '../../components/Card'
import { connect } from 'react-redux';
import {  addCard, deleteCard } from './../../actions';

class KanbanColumn extends Component {
  constructor(props) {
    super(props);

  }

  deleteCard = (event) => {
    this.props.deleteCard(event.target.id);
    console.log(event.target.id);
  }

  render() {
    return (
      <div className="kanban-column">
        <h1>{this.props.status}</h1>
        <ul className="card-list">
          {
            this.props.cards.filter( card => {
              return card.status === this.props.status;
            }).map( card => {
              return(
                <Card
                  key={ card.id }
                  id={ card.id }
                  task={ card.task }
                  priority={ card.priority }
                  status={ card.status }
                  assignedTo={ card.assignedTo }
                  createdBy={ card.createdBy }
                  deleteCard={this.deleteCard}
                />
              );
            })
          }
        </ul>
      </div>
    )
  }
}

// export default KanbanColumn;


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
)(KanbanColumn);