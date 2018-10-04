import React, { Component } from 'react'
import './App.css'
import Json from './Json.json'
import PhotoList from './PhotoList'
import Home from './Home'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/:category"
                component={route => {
                  return (
                    <PhotoList
                      category={route.match.params.category}
                      list={Json}
                    />
                  )
                }}
              />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
