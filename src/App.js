import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/'> <h1>People Logger</h1> </Link>
        { this.props.children }
      </div>
    );
  }
}

export default App;
