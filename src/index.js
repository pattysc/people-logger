import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import PeopleNew from './PeopleNew'
import PeopleIndex from './PeopleIndex'
import PeopleShow from './PeopleShow'
import PeopleEdit from './PeopleEdit'
import Welcome from './Welcome'
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="people/new" component={PeopleNew}/>
      <Route path="people" component={PeopleIndex}/>
      <Route path="people/:id" component={PeopleShow} />
      <Route path="people/:id/edit" component={PeopleEdit} />
    </Route>
  </Router>
), document.getElementById('root'))
