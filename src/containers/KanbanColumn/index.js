import React, { Component } from 'react';
import Card from '../../components/Card'

class KanbanColumn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
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
