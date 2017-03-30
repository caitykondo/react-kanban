import React, { Component } from 'react';
import Card from '../../components/Card'
import { connect } from 'react-redux';
import {  addCard, deleteCard, moveCard } from './../../actions';

class KanbanColumn extends Component {
  constructor(props) {
    super(props);

  }

  sendData = (event) =>{
    let endpoint = 'http://localhost:9000/task';
    let q = ''

    for (name in this.state){
       q +=  encodeURIComponent(name) + "=" + encodeURIComponent(this.state[name]) + "&";
    }

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("POST", endpoint);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.send(q);
  }

  moveCard = ({ target: {
        id,
        dataset
      }
    }) => {
      let targetStatus = '';
      console.log("DATA",dataset.status);
      switch(dataset.status){
        case 'on hold':
          if(dataset.direction === 'right'){
            targetStatus = 'in progress';
          }
          break;

        case 'in progress':
          if(dataset.direction === 'right'){
            targetStatus = 'done';
          }else if(dataset.direction === 'left'){
            targetStatus = 'on hold';
          }
          break;

        case 'done':
          if(dataset.direction === 'left'){
            targetStatus = 'in progress';
          }
          break;
      }

      this.props.moveCard(id, dataset.status, targetStatus);

  }

  deleteCard = (event) => {
    this.props.deleteCard(event.target.id);

    let endpoint = `http://localhost:9000/task/${event.target.id}`;
    let http = new XMLHttpRequest();
    http.open("DELETE", endpoint, true);
    http.send();

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
                  moveCard={this.moveCard}
                />
              );
            })
          }
        </ul>
      </div>
    )
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
    },

    moveCard: (id, status, direction) => {
      dispatch(moveCard(id, status, direction));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanColumn);