import React, { Component } from 'react';

import KanbanColumn from '../../containers/KanbanColumn';
import CardForm from '../../containers/CardForm';


class KanbanBoard extends Component {
  constructor(props) {
    super(props);
    this.statusList = ['on hold', 'in progress', 'done']
    this.state = {
      cards: []
    }
  }

  addCard = (event) => {
    event.preventDefault();
    let card = JSON.parse(event.target.dataset.card);
    let cards = this.state.cards;
    cards.push(card);
    this.setState(
      {cards: cards}
    )
  }


  componentWillMount() {
    let ps = this;
    function cardsReqListener() {
      ps.setState({
        cards: JSON.parse(this.responseText)
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
      <div className="kanban-board">
        {
          this.statusList.map( status => {
            return(
              <KanbanColumn
                key={ Math.random() }
                status={ status }
                cards={ this.state.cards }
              />
            )
          })
        }
        <CardForm
          addCard={ this.addCard }
        />
      </div>
    );
  }
}

export default KanbanBoard;
