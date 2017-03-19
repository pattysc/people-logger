import React, { Component } from 'react';
import axios from 'axios'
import { browserHistory } from 'react-router'

export default class PeopleNew extends Component {
  constructor(){
    super()

    this.state = {
      saving: false,
      name: '',
      favoriteCity: '',
      person: {}
    }
  }

  componentDidMount(){
    console.log(this.props.params.id);
    axios.get(`https://people-logger-api.herokuapp.com/people/${this.props.params.id}`).then((res) => this.setState({person: res.data, name: res.data.name, favoriteCity: res.data.favoriteCity}) )
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
    axios.patch(`https://people-logger-api.herokuapp.com/people/${this.state.person.rowid}`, person).then(
      setTimeout(() => {
        browserHistory.push(`/people/${this.state.person.rowid}`)
      }, 100)
    )
  }

  render() {
    return (
      <div className="EditForm">
        <form>
          <label>Edit {this.state.person.name}'s info</label><br/>
          <input type="text" id="name" name="name" placeholder={this.state.person.name} value={this.state.name} onChange={this.handleNameChange.bind(this)}/><br/>
          <input type="text" id="favoriteCity" name="favoriteCity" placeholder={this.state.person.favoriteCity} value={this.state.favoriteCity} onChange={this.handleCityChange.bind(this)}/><br/>
          <button type="button" onClick={this.personSubmission.bind(this)}> Update </button>
        </form>
        {this.state.saving ? 'saving...' : ''}
      </div>
    );
  }
}
