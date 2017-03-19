import React, { Component } from 'react';
import axios from 'axios'
import { browserHistory } from 'react-router'

export default class PeopleNew extends Component {
  constructor(){
    super()

    this.state = {
      saving: false,
      name: '',
      favoriteCity: ''
    }
  }

  handleNameChange(event){
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  handleCityChange(event){
    event.preventDefault()
    this.setState({
      favoriteCity: event.target.value
    })
  }

  personSubmission(event){
    event.preventDefault()
    this.setState({ saving: true })
    var person = {name: this.state.name, favoriteCity: this.state.favoriteCity}
    axios.post('https://people-logger-api.herokuapp.com/people', person).then(
      setTimeout(() => {
        browserHistory.push('/people')
      }, 100)
    )
  }

  render() {
    return (
      <div className="App">
        <form id="form">
          <header>Add a new person</header><br/>
          <input type="text" id="name" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/><br/>
          <input type="text" id="favoriteCity" name="favoriteCity" placeholder="Favorite City" value={this.state.favoriteCity} onChange={this.handleCityChange.bind(this)}/><br/>
          <button type="button" onClick={this.personSubmission.bind(this)}> Add! </button>
        </form>
        {this.state.saving ? <div class="loader"></div> : ''}
      </div>
    );
  }
}
