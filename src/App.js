import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Query from './containers/QueryPage/QueryPage';
import Forms from './containers/Forms/Forms';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <NavLink to="/query">Query</NavLink>
            <p />
            <NavLink to="/forms">Create New Incentive</NavLink>
          </nav>

          <Switch>
            <Route path='/query' component={Query} />
            <Route path='/forms' component={Forms} />
            <Redirect from='/' to='/query' />
            <Route render={() => <h1>Not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
