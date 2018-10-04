import React, { Component } from 'react'
import './App.css'
import Json from './Json.json'
import CategoryList from './CategoryList'

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
            <div>
              <ul className="photo-list-header">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>/</li>
                <li>{Json.pandas.title}</li>
              </ul>
              <main className="photo-list-main">
                <div className="photo-list-info">
                  <h1>{Json.pandas.title}</h1>
                  <p>{Json.pandas.description}</p>
                </div>
                <div className="photo-list">
                  <div className="photo">
                    <img src={Json.pandas.photos[0].imageURL} />
                    <span>{Json.pandas.photos[0].title}</span>
                  </div>
                  <div className="photo">
                    <img src={Json.pandas.photos[1].imageURL} />
                    <span>{Json.pandas.photos[1].title}</span>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
