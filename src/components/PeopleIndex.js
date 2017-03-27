import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router'

class PeopleIndex extends Component {
  constructor(){
    super()

    this.state = {
      people: []
    }
  }

  componentWillMount(){
    axios.get('https://people-logger-api.herokuapp.com/people').then(
      (res) => this.setState({people: res.data})
    )
  }

  render() {
    console.log(this.state.people);
    return (
      <div className="PeopleIndex">
        <h2> These are your logged friends </h2>
        <p>To see more info about them, or edit their info, click on their name!</p>
        <div className="index">
          {this.state.people.length === 0 ? `No people logged yet :( Log the first person!` : ''}
          {this.state.people.map( (person) => <Link to={`/people/${person.rowid}`}>{person.name}<br/></Link> )}
        </div>
        <Link to='/people/new'><button>Log a new person</button></Link>
      </div>
    );
  }
}

export default PeopleIndex;
