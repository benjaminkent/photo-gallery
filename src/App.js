import React, { Component } from 'react'
import './App.css'
import Json from './Json.json'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header>
              <h1>Things I Like</h1>
              <h2>A Photo Gallery by Benjamin Kent Jehl</h2>
            </header>
            <CategoryList />
            <PhotoList />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
