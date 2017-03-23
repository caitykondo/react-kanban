import React, { Component } from 'react';
import Card from '../../components/Card'

class KanbanColumn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: []
    }
  }

  componentWillMount() {
    let ps = this;
    function cardsReqListener(cards) {
      console.log(JSON.parse(this.responseText));
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
      <div className="kanban-column">
        <ul className="card-list">
          {
            this.state.cards.map( card => {
              return(
               <Card
                key={ card.id }
                task={ card.task }
                priority={ card.priority }
                status={ card.status }
                createdBy={ card.createdBy }
                assignedTo={ card.assignedTo }
               />
              );
            })
          }
        </ul>
      </div>
    )
  }
}

export default KanbanColumn;
