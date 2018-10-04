import React, { Component } from 'react'
import CategoryList from './CategoryList'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Things I Like</h1>
          <h2>A Photo Gallery by Benjamin Kent Jehl</h2>
        </header>
        <ul className="photo-list-header">
          <li>
            <Link to="/" component={Home}>
              Home
            </Link>
          </li>
        </ul>
        <CategoryList />
      </div>
    )
  }
}

export default Home
