import React, { Component } from 'react';
import axios from 'axios'
import { Link, browserHistory } from 'react-router'

class PeopleIndex extends Component {
  constructor(){
    super()

    this.state = {
      person: {}
    }
  }

  componentDidMount(){
    console.log(this.props.params.id);
    axios.get(`https://people-logger-api.herokuapp.com/people/${this.props.params.id}`).then((res) => this.setState({person: res.data}) )
  }

  deletePerson(){
    axios.delete(`https://people-logger-api.herokuapp.com/people/${this.props.params.id}`).then(
      setTimeout(() => {
        browserHistory.push('/people')
      }, 100)
    )
  }

  render() {
    return (
      <div className="peopleIndex">
        <div className="show">
          <h2> {this.state.person.name} </h2>
          <p> Favorite City: {this.state.person.favoriteCity} </p>
        </div>
        <button onClick={this.deletePerson.bind(this)}>Delete {this.state.person.name}</button><br/>
        <Link to={`/people/${this.state.person.rowid}/edit`}><button>Edit {this.state.person.name}'s info</button></Link> <br/>
        <Link to='/people'><button>See all people logged</button></Link>
      </div>
    );
  }
}

export default PeopleIndex;
