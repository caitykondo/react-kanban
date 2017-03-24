import React, { Component } from 'react';

import KanbanColumn from '../../containers/KanbanColumn';
import CardForm from '../../containers/CardForm';
import { connect } from 'react-redux';
import {  addCard } from './../../actions';


class KanbanBoard extends Component {
  constructor(props) {
    console.log('constructor', props);
    super(props);
    this.statusList = ['on hold', 'in progress', 'done']
  }

  // addCard = (event) => {
  //   event.preventDefault();

  //   let card = JSON.parse(event.target.dataset.card);
  //   console.log(card);
  //   let cards = this.state.cards;
  //   cards.push(card);
  //   this.setState(
  //     {cards: cards}
  //   )
  // }


  render() {
    console.log('board',this.props);
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
          // addCard={ this.addCard }
        />
      </div>
    );
  }
}

// export default KanbanBoard;
const mapStateToProps = (state) => {
    return {
      cards: state.cards
    }
  };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddCard: (task, priority, status, createdBy, assignedTo) => {
//       dispatch(addCard(task, priority, status, createdBy, assignedTo));
//     }
//   }
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(KanbanBoard);