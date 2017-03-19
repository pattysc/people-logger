import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import PeopleNew from './components/PeopleNew'
import PeopleIndex from './components/PeopleIndex'
import PeopleShow from './components/PeopleShow'
import PeopleEdit from './components/PeopleEdit'
import Welcome from './components/Welcome'
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
