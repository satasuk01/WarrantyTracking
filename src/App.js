import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Query from './containers/QueryPage/QueryPage';
import Forms from './containers/Forms/Forms';
import CardApproval from './containers/CardApproval/CardApproval';
import EditPage from './containers/EditPage/EditPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="NaviBar">
            <nav>
              <NavLink to="/query" style={{marginRight:'10px'}}>Query</NavLink>
              <NavLink to="/forms">Create New Incentive</NavLink>
            </nav>
          </div>
          <Switch>
            <Route path={'/approval/:id'} component={CardApproval} />
            <Route path={'/edit/:id'} component={EditPage} />
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
