import React, { Component } from 'react';

import KanbanColumn from '../../containers/KanbanColumn';

class KanbanBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentWillMount() {
    let ps = this;
    function cardsReqListener() {
      console.log(this.responseText);
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
        <KanbanColumn
          status="on hold"
          cards={ this.state.cards }
        />
        <KanbanColumn
          status="in progress"
          cards={ this.state.cards }
        />
        <KanbanColumn
          status="done"
          cards={ this.state.cards }
        />
      </div>
    );
  }
}

export default KanbanBoard;
