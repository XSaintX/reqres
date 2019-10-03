import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'

import Users from './components/Users'
import NotFound from './components/NotFound'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/users" component={Users} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App