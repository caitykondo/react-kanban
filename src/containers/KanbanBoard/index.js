import React, { Component } from 'react';

import KanbanColumn from '../../containers/KanbanColumn';

class KanbanBoard extends Component {
  constructor(props) {
    super(props);
    this.statusList = ['on hold', 'in progress', 'done']
    this.state = {
      cards: []
    }
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

      </div>
    );
  }
}

export default KanbanBoard;
