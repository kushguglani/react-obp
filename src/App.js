import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {Route} from 'react-router-dom';
import './App.css';
import LandingPage from './Component/landing/landing';
import Dashboard from './Containers/dashboard';
import PrivateRoute from './helpers/privateRoute'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
