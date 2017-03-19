import React, { Component } from 'react';
import { Link } from 'react-router'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <h2>Welcome to People Logger!</h2>

        <p> Here you'll be able to log some of your friends' names and their favorite cities!</p>

        <p>We got you started with one example! You can see a list of all the people logged here: </p>
        <Link to='/people'><button id="button">See all people logged</button></Link>

        <p> Start now by logging someone you know! </p>
        <Link to='/people/new'><button id="button">Log a new person</button></Link>
      </div>
    );
  }
}

export default Welcome
